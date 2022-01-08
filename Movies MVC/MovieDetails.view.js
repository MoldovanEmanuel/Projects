class MovieDetailsView {
    render(movie) {
        const title = document.querySelector('[data-photo-title]'); 
        const image = document.querySelector('[data-photo-image]'); 

        title.textContent = movie.Title; 
        image.src = movie.Poster; 
    }
}