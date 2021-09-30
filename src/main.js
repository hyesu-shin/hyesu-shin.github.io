// Entry Point

// async/await 사용을 위한 babel/polyfill import
import "@babel/polyfill"
import App from './app.js'
// import {initialRoutes} from "./core/Router";

// initialRoutes('history', document.querySelector('#app'), '');
new App(document.querySelector('#app'), '');
