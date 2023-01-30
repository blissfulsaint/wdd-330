import Comment from './Comments.js';

export default class Template {
 
    constructor(type) {
      this.type = type;
      this.template = '';
      this.list = [];
      this.comments = new Comment(this.type, 'comments');
    }

    async init(template) {
      this.template = template;
      this.fixHeader();
      parent = document.querySelector(`#${this.type} > ul`);
      this.list = await this.makeRequest(`json/${this.type}.json`);
      parent.innerHTML = this.renderList();
      this.comments.showCommentList(1);
    }

    fixHeader() {
      const element = document.querySelector(".header");
      element.setAttribute("id", this.type);
      element.innerHTML = this.prepareTemplate(element.innerHTML, {
        "types": this.type
      });
    }

    prepareTemplate(template, options) {
      // this is using a regular expression to match a pattern of {{ someThing }} in the template text. If it finds the {{ }} pattern it will look in options for someThing
      // because we have not studied regular expression I'll just tell you there are no errors with this line :)
      template = template.replace(/\{\{\s?(\w+)\s?\}\}/g, (match, variable) => {
        return options[variable] || ''
      })
      return template;

    }

    renderList() {
      const text = this.list.map(item => {
        let template = "";
        const clone = this.template;
        // make sure to clone the template content each time we use it so each instance is separate and unique. If we forget then it won't work.
        return template = this.prepareTemplate(clone, item);
      }).join("");
      return text;
    }

    async makeRequest(url) {
      // this works...until there is a problem, we should harden this up to catch errors if they occur
      const response = await fetch(url);
      return await response.json();
    }

}