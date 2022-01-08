let url = 'https://movies-app-siit.herokuapp.com/movies'; 
const moviesDiv = document.getElementById('movies');  
const prevButton = document.getElementById('prev'); 
const nextButton = document.getElementById('next'); 
let nextLink = ''; 
let prevLink = '';  

function fetchMovies() {
    fetch(url)
     .then(res => {
         if (!res.ok) {
             throw Error("ERROR"); 
         }
         return res.json(); 
     })
     .then(data => {
         nextLink = data.pagination.links.next;  
         prevLink = data.pagination.links.prev;  
          console.log(data.results);
         const movieTitles = data.results.map(movies => {
             return `<div><p class="movietitle"> ${movies.Title}</p> 
                    <img class="img" src="${movies.Poster}"/></div>`
         }).join(''); 
         console.log(movieTitles)
         document.querySelector("#movies").innerHTML = movieTitles;
     })
     .catch(error => {
         console.log(error); 
     })
}; 

fetchMovies(); 

function nextButtonPressed() {
    if(nextLink === null) {
    }
     else {
        url = nextLink;
        fetchMovies(); 
    }
};

function prevButtonPressed() {
    if(prevLink === null) {
    }
    else {
        url = prevLink;
        fetchMovies(); 
    }
}; 

