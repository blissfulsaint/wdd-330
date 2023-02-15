const baseUrl = "https://api.inaturalist.org/v1/identifications?current=true&order=desc&order_by=created_at";

export default class NatapiHelper {

    constructor(outputId){
        this.outputId = outputId;
        this.results = [];
        this.init();
    }

    async init(){
        // this.outputElement.style.display = "none";
        // this.loadingElement.style.display = "block";
        this.results = await this.makeRequest(baseUrl);
        console.log(this.results);
        // const photo = this.results.results[0].observation.taxon.default_photo;
        // console.log(photo);

        this.renderPhotoList("output", this.results);
    }

    async makeRequest(url){
        try {
            const response = await fetch(url);
            if(response.ok){
                return await response.json();
            }
            else {
                const error = await response.text();
                throw new Error(error);
            }
        }
        catch (err) {
            console.log(err);
        }
    }

    renderPhotoList(outputId, data) {
        const element = document.getElementById(outputId);
        let htmlString =[];
        for (let i = 0; i <= 20; i++){
            htmlString.push(`<li>
                <img src=${data.results[i].observation.taxon.default_photo.url}>
                </li>`);
        }
        element.innerHTML = htmlString.join("");
        console.log(htmlString);
    }

    photoTemplate(item) {
        return ;
    }
}