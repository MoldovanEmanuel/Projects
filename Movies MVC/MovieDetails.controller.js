class MovieDetails {
    constructor() {
       this.model = new Movies(); 
       this.view = new MovieDetailsView(); 
    }
    async init() {
        const _id = this.getIdFromUrl(); 
        const movie = await this.model.getMovieById(_id); 
        this.view.render(movie); 
    }
    getIdFromUrl() {
        const params = new URLSearchParams(location.search); 
        return params.get('_id'); 
    }
}

const page = new MovieDetails();
page.init(); 