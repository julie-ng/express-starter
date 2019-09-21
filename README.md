# Express ES6 Starter

[![Build Status](https://travis-ci.org/julie-ng/express-starter.svg?branch=master)](https://travis-ci.org/julie-ng/express-starter)
[![Maintainability](https://api.codeclimate.com/v1/badges/06ce93c85bab4cc03ec6/maintainability)](https://codeclimate.com/github/julie-ng/express-starter/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/06ce93c85bab4cc03ec6/test_coverage)](https://codeclimate.com/github/julie-ng/express-starter/test_coverage)
[![Build Status](https://dev.azure.com/julie-io/demos/_apis/build/status/julie-ng.express-starter?branchName=master)](https://dev.azure.com/julie-ng/demos/_build/latest?definitionId=2&branchName=master)

A custom [NodeJS](https://nodejs.org/) starter project with **preconfigurations** and **templates** to help you ship quality code early and often. 

### Table of Contents

- [Express Server](#express-server)
- [Code Quality](#code-quality-)
  - [Unit Specs with Jasmine](#unit-specs-with-jasmine) 
  - [ES Linter](#es-linter)
- [Development Workflow](#development-workflow)
  - [Preflight Command](#preflight-command)
- [Docker Setup](#docker-setup)
- [Jenkins Pipeline](#jenkins-pipeline)
- [Automated Semantic Versioning](#automated-semantic-versioning)

## Express Server

This project uses [Express](https://expressjs.com/), a minimalist web framework for Node.js. It's lightweight and great for APIs.

### Development

Using [nodemon](https://github.com/remy/nodemon), the express server is automatically restarted when the `src` directory changes.

```
npm run server
```

The server defaults to port `3000`. You can change it by setting the `PORT` environment variable.

### Production

In production, run the server using just node:

```
npm start
```

## Code Quality 👌

Jasmine is preconfigured and an example spec showing how to test Express apps is included. Just as important as testing but often forgotten is linitng. As author of _Clean Code_ Robert Martin wrote:

> Consistent indentation style was one of the most statistically significant indicators of low bug density.

### Unit Specs with Jasmine

Unit tests leverage the [Jasmine testing framework](https://github.com/jasmine/jasmine). They are executed with the standard NPM `test` command.

```
npm test
```

Unit specs:

- must use `.spec.js` as a suffix
- are preferably saved in the `/specs`, but they will be picked up anywhere
- are executed randomly

For your convenience `context()` is also aliased to `describe()`, which helps nested syntax:

```javascript
describe ('login()', () => {
  context ('valid credentials', () => {
    it ('returns true', () => {
      ...
    })
  })
  context ('invalid credentials', () => {
    it ('returns false', () => {
      ...
    })
  })
})
```

### ES Linter

This project is also linted for code consistency with the [recommended rule set](http://eslint.org/docs/rules/), plus some custom changes, most notably:

[Semicolons](http://eslint.org/docs/rules/semi) are _not_ allowed:

```javascript
// OK
let foo = bar

// will error
let foo = 'bar';
```

[Spaces](http://eslint.org/docs/rules/space-before-function-paren) are _required_ before the `function` parenthesis:

```javascript
// OK
function (foo) {
  return true
}

// Fails
function(foo) {
  return true
}
```

Consistent [spacing inside curly braces](http://eslint.org/docs/rules/object-curly-spacing), for example:

```javascript
// OK
import { app }

// Fails
import {app}
```

To see all adjustments, see the `.eslintrc` file.

#### Autofix Problems

You can autofix most common linting offenses with this command:

```
npm run lint:fix
```

## Development Workflow

In _development_ however, you can leverage auto reloading with:

```
npm run dev
```

which will simultaneously run and watch:

- server
- unit specs
- linter

Or you can run them separately:

```
npm run server
npm run lint:watch
npm run test:watch
```

### Preflight Command

Before I push code, I like to check if it will pass all continuous integration stages with a simple command that runs all the stages:

```
npm run preflight
```

If you wanted to, you could also configure a githook to ensure all your commits are green.

## Docker Setup

For your convenience, there is an included `Dockerfile` and `docker-compose.yml`, which help jumpstart your microservice architecture.

These presets save you from common gotchas:

- Dockerfile: `package.json` is copied first to avoid the heavy `npm install` step on successive builds.
- `docker-compose.yml`: note that `node_modules` is mounted separately. This is required because native bindings can differ between the container and your development computer.
- Included `.dockerignore` to avoid copying giant `node_modules` folder on build.

Note these files are configured for _development only_. If you plan to use them in production, you will make adjustments, e.g. use a different base image.

## Jenkins Pipeline

There is a sample `Jenkinsfile` which a declarative pipeline including the following common stages:

- checkout
- install dependencies
- run linter
- run unit specs

## Automated Semantic Versioning

This project uses [standard-version](https://github.com/conventional-changelog/standard-version) for automatic semantic versioning and change logs. 

1) Commit messages must follow the [Conventional Commits standard](https://conventionalcommits.org/).

2) When you are ready to release, just run:

```
npm run release
```

which will automatically:

- update your `CHANGELOG.md`
- tag your git repository

Depending on your commit messages, standard-version will automatically determine if it's a major, minor or patch release.
