# Camaras

**Camaras** is an interface for showing a montage of [https://zoneminder.com/](ZoneMinder) monitors livestreams, 
where each monitor represents one of the hd or sd streams of a camera.

For more information about livestreams: https://zoneminder.readthedocs.io/en/stable/api.html#streaming-interface



## Project Setup

```sh
npm install
```

### Configuration: Environment variables

For more information see `.env_template`

Required:

- `VITE_ZONEMINDER_HOST`: Set to the url of the ZoneMinder instance (`https://yourserver` in https://zoneminder.readthedocs.io/en/stable/api.html#streaming-interface)


### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

A zip file called dist.zip will be created at the root of the project, containing the build output.

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
npm run test:e2e:dev
```

This runs the end-to-end tests against the Vite development server.
It is much faster than the production build.

But it's still recommended to test the production build with `test:e2e` before deploying (e.g. in CI environments):

```sh
npm run build
npm run test:e2e
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
