import Router from './Router.js';

export default class NavRouter{

    constructor(parent, contentElement) {
        this.routes = [
            new Router('hikes'),
            new Router('parks')
        ];
        this.parent = parent;
        this.contentElement = contentElement;
    }

    buildNavigation() {
        this.routes.forEach(route => {
          let item = document.createElement('li');
          item.innerHTML = `<a href="#${route.type}">${route.type}</a>`;
          this.parent.appendChild(item);
          item.addEventListener('click', e =>{
            route.insertView(this.contentElement);
          })
        });
    }   

}