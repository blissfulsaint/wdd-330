import NatapiHelper from "./NatapiHelper.js";


document.querySelector('p').addEventListener('click', () => {
    const myHelper = new NatapiHelper("output");
    myHelper.init();
})