# Ultimate Hot Reloading Example

## Goals

  * Only one running node process ✅
  * Client-side Redux reducer hot reloading ✅
  * Server-side Redux reducer hot reloading ✅
  * Client-side React component hot reloading ✅
  * Server-side React component hot reloading ✅
  * Server-side express routes hot reloading ✅
  * Client side [css-modules](https://github.com/css-modules/css-modules) hot reloading ✅
  * Data fetching through a remote API
  * Multiple pages via Routing

## Installing

Once cloned locally, run `npm install`. To start the server run `npm start` and visit `http://localhost:3000/` in your browser.

## Try it out

  * Change initial in `reducers/index.js` and hit refresh to see server redux reload
  * Change INC amount in `reducers/index.js` to and hit the button to see client redux reload
  * Change component in `components/App.js` to see client/server react reload
  * Change the responses in `server/app.js` to see the express routes reload
  * Change the CSS in `client/common/layout.css` to see imported CSS reload
  * Change the CSS in `client/components/App.css` to see the imported CSS reload

## Demo

![ultimate-reload-css](https://cloud.githubusercontent.com/assets/133832/10411396/56e276ea-6f64-11e5-8d71-d7006a32c38e.gif)
