const apiUrl = 'https://movies-app-siit.herokuapp.com/'; 

class Movies {
    endpoint = apiUrl + 'movies'; 
    endpoint1 = apiUrl + 'movies' + '?take=100'; 

    getAllMovies() {
        let url = this.endpoint1;
        return fetch(url).then(res => res.json());
    }

    getMovieById(_id) {
        return fetch(`${this.endpoint}/${_id}`).then(res => res.json());
    }
}; 

