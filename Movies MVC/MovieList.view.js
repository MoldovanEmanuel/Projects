
class MovieListView {
    constructor(movie) {
       const html = this.buildHtml(movie.results);
       this.render(html); 
    }

    buildHtml(movies) {
        const html = document.createDocumentFragment();  
        for(const movie of movies) {
            const article = document.createElement('article'); 
            const link = document.createElement('a'); 
            const image = document.createElement('img'); 
            const heading = document.createElement('h2'); 
            console.log(movie);
            heading.textContent = movie.Title; 
            link.href = `MovieDetails.html?_id=${movie._id}`; 
            image.src = movie.Poster; 
            image.alt = `Photo: ${movie.Title}`; 

            article.append(link);
            link.append(heading, image); 

            html.append(article); 
        }

        return html; 
    }

    render(html) {
       const sink = document.getElementById('root'); 
        sink.append(html); 
    }
}