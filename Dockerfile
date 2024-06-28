# syntax=docker/dockerfile:1
# see: https://docs.docker.com/engine/reference/builder/
ARG NODE_VERSION=20.11.1


FROM node:${NODE_VERSION}-alpine AS base

ENV PNPM_HOME=/pnpm
ENV PATH=$PNPM_HOME:$PATH

RUN corepack enable

WORKDIR /src


FROM base AS production-deps

ENV NODE_ENV=production

RUN --mount=type=bind,source=package.json,target=package.json \
    --mount=type=bind,source=pnpm-lock.yaml,target=pnpm-lock.yaml \
    --mount=type=cache,target=/pnpm/store \
    pnpm install --frozen-lockfile --ignore-scripts


FROM base AS build

COPY --from=production-deps /src/node_modules ./node_modules

RUN --mount=type=bind,source=package.json,target=package.json \
    --mount=type=bind,source=pnpm-lock.yaml,target=pnpm-lock.yaml \
    --mount=type=cache,target=/pnpm/store \
    pnpm install --frozen-lockfile --ignore-scripts

COPY --link . .

RUN pnpm run build


FROM base AS runtime

# Use production node environment by default.
ENV NODE_ENV=production

COPY --from=build /src/build ./build
COPY --from=production-deps /src/node_modules ./node_modules
COPY --link package.json .

ENV HOST=0.0.0.0 PORT=5555
EXPOSE 5555/tcp

# Run the application as a non-root user.
USER node

# Run the application.
CMD ["pnpm", "run", "start"]
