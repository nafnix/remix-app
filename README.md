# Welcome to Remix App!

[![code style](https://antfu.me/badge-code-style.svg)](https://github.com/antfu/eslint-config)

- 📖 [Remix docs](https://remix.run/docs)

## Setup

Install the dependencies:

```bash
pnpm install
```

## Development

Run the dev server on `http://localhost:5173`:

```shellscript
pnpm run dev
```

## Deployment

First, build your app for production:

```sh
pnpm run build
```

Then run the app in production mode:

```sh
pnpm start
```

Now you'll need to pick a host to deploy it to.

### DIY

If you're familiar with deploying Node applications, the built-in Remix app server is production-ready.

Make sure to deploy the output of `pnpm run build`

- `build/server`
- `build/client`

## Docker

Build this application using the `compose.yaml` file in the project root directory.

```sh
docker compose up --build
```
