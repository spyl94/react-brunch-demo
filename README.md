# react-brunch-demo

This is a demo for a frontend application, powered by [React](http://facebook.github.io/react) & [Redux](http://redux.js.org), written in ES6, typed with [Flow](https://flowtype.org), tested with [Jest](http://facebook.github.io/jest) and built with [Brunch](http://brunch.io).

## Getting started
* Install (if you don't have them):
    * [Node.js](http://nodejs.org): `brew install node` on OS X
    * [Yarn](https://yarnpkg.com): `brew install yarn` on OS X
    * [Brunch](http://brunch.io): `yarn global add brunch --prefix /usr/local`
    * Brunch plugins and dependencies: `yarn install`.
* Run:
    * `brunch watch --server` — watches the project with continuous rebuild. This will also launch HTTP server with pushState.
    * `brunch build --production` — builds minified project for production
* Learn:
    * `public/` dir is fully auto-generated. Write your code in `app/` dir.
    * Place static files you want to be copied from `app/assets/` to `public/`. Ideal for images, fonts...
    * [Brunch site](http://brunch.io), [Getting started guide](https://github.com/brunch/brunch-guide#readme)

## Intl

Messages are extracted in `./intl/messages`.
