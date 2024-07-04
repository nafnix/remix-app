# Welcome to Remixing!

[![code style](https://antfu.me/badge-code-style.svg)](https://github.com/antfu/eslint-config)

- [Remix](https://remix.run/docs)
- [TypeScript](https://www.typescriptlang.org)
- [UnoCSS](https://github.com/antfu/unocss)
- [I18n](https://www.i18next.com/)
- [unplugin-auto-import](https://github.com/unplugin/unplugin-auto-import)
- [ESLint](https://eslint.org/) with [@antfu/eslint-config](https://github.com/antfu/eslint-config)
- [Husky](https://github.com/typicode/husky) with [lint-staged](https://github.com/lint-staged/lint-staged)

## Use Template

Start using this template:

```bash
pnpm dlx create-remix@latest --template nafnix/remixing
```

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

```bash
pnpm run build
```

Then run the app in production mode:

```bash
pnpm run start
```

Now you'll need to pick a host to deploy it to.

### DIY

If you're familiar with deploying Node applications, the built-in Remix app server is production-ready.

Make sure to deploy the output of `pnpm run build`

- `build/server`
- `build/client`

## Docker

Build this application using the `compose.yaml` file in the project root directory.

```bash
docker compose up --build
```
