const baseUrl = "https://swapi.dev/api/";

export default class SwapiHelper {

    constructor(outputId, filmId, loadingId){
        this.outputId = outputId;
        this.outputElement = document.getElementById(outputId);
        this.filmId = filmId;
        this.filmElement = document.getElementById(filmId);
        this.loadingId = loadingId;
        this.loadingElement = document.getElementById(loadingId);
        this.films = [];
        this.init();
    }

    async init(){
        this.outputElement.style.display = "none";
        this.loadingElement.style.display = "block";
        this.films = await this.makeRequest(baseUrl + "films");
        this.films = this.films.results;
        console.log(this.films);
        this.outputElement.style.display = "initial";
        this.loadingElement.style.direction = "none";
        this.clickableList(this.films, this.filmId, this.filmSelected.bind(this));
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

    clickableList(list, elementId, callback){
        const element = document.getElementById(elementId);
        element.innerHTML = list.map((film) => 
        `<li>${film.title}</li>`).join("");
        element.addEventListener("click", (e) => {
            console.log(e.target);
        });
    }

    async filmSelected(filmTitle){
        try{
            const film = this.films.find((item) => 
            item.title === filmTitle);
            if(!film){
                throw new Error("Film Not Found");
            }
            this.outputElement.innerHTML = this.pageTemplate();
            this.outputElement.querySelector(".film-name").innerHTML = film.title;

            this.outputElement.querySelector(".crawl").innerText = film.opening_crawl;
        }
        catch (err) {
            console.log(err);
        }

    }

    pageTemplate() {
        return `<h2 class="film-name"></h2>
        <p class="crawl"></p>
        <section class="planets">
            <h3>Planets</h3>
            <ul class="detail-list film-planets"></ul>
        </section>
        <section>
            <h3>Starships</h3>
            <ul class="detail-list film-starships"></ul>
        </section>`
    }
}