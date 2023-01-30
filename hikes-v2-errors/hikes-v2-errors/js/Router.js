import Template from './Template.js';

export default class Router {

    constructor(type){
        this.type = type;
        this.header = `partials/header.html`;
        this.file =  `partials/${type}.html`;
        this.controller = new Template(this.type);
    }

    async insertView(contentElement){
        const header = await this.getView(this.header);
        const view = await this.getView(this.file);
        contentElement.innerHTML = header;
        this.controller.init(view);
    }

    async getView(viewPath) {
        try {
          const response = await fetch(viewPath);
          const text = await response.text();
          //debugger;
          return text;
        } catch (err) {
          console.log('Something went wrong', err);
        }
    }
    
    

}