let url = 'https://movies-app-siit.herokuapp.com/movies/60785b4cb67a170022f107e4';

function fetchMovies() {
    fetch(url)
        .then(res => {
            if (!res.ok) {
                throw Error("ERROR");
            }
            return res.json();
        })
        .then(data => {
            console.log(data);
            let movieTitle = data.Title;
            let moviePoster = data.Poster;
            let movieGenre = data.Genre;
            let moviePlot = data.Plot;
            let movieRating = data.Ratings[0]['Source'];
            let movieRating1 = data.Ratings[0]['Value'];

            const mainContainer = document.getElementById('content');
            let star = document.getElementById('star');  
            const fragment = document.createDocumentFragment(); 

            let title = document.createElement('p');
            let poster = document.createElement('img');
            let genre = document.createElement('p'); 
            let plot = document.createElement('p');
            let rating = document.createElement('p');
            let ratingSource = document.createElement('p'); 
            let icon = document.createElement('span'); 
            let content = document.createElement('article');

            title.append(movieTitle); 
            title.classList.add('title'); 

            poster.append(moviePoster); 
            poster.setAttribute('src', 'https://m.media-amazon.com/images/M/MV5BOWY0NWNlMjUtYzA3YS00YmUwLWI4ZTMtMTM0NzNmNzczNzE2XkEyXkFqcGdeQXVyOTExNzM4NDM@._V1_SX300.jpg'); 

            genre.append(movieGenre); 

            plot.append(moviePlot); 

            
            ratingSource.append(movieRating);
            rating.append(movieRating1); 

            star.append(rating); 
            icon.append(star);
           
                       
            icon.append(fragment); 
            fragment.append(content); 
            

            content.append(title, poster, genre, plot, ratingSource, star); 
            console.log(content); 

            
            mainContainer.innerHTML = ''; 
            mainContainer.append(fragment); 
            
        })
        .catch(error => {
            console.log(error);
        })
};
fetchMovies();

