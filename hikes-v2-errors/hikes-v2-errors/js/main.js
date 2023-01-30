// import buildNavigation  from './router.js';
import NavRouter from "./NavRouter.js";

const navElement = document.getElementById('mainNav');
const contentElement = document.getElementById('content');

const myNavRouter = new NavRouter(navElement, contentElement)
myNavRouter.buildNavigation();