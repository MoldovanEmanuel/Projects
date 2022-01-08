const nextButtonPressed = document.getElementById('next');
const prevButtonPressed = document.getElementById('prev');

class MovieList {
    constructor() {
        this.model = new Movies();
        this.model
            .getAllMovies()
            .then(movies => {
                this.view = new MovieListView(movies);
                this.nextLink = movies.pagination.links.next;
                console.log(this.nextLink) //- take 10 skip 10 - works 
                this.prevLink = movies.pagination.links.prev;
                console.log(this.prevLink) //- null - works 
            });
    };   

    nextButtonPressed() {
        if (this.nextLink === null) {
        }
        else {
            this.model = new Movies(this.nextLink);
            this.model
                .getAllMovies()
                .then(movies => {
                    this.view = new MovieListView(movies);
                    this.nextLink = movies.pagination.links.next;
                });
        };
        // document.getElementById('next').addEventListener('click', this.nextButtonPressed()); 
    };

    prevButtonPressed() {
        if (this.prevLink === null) {
        }
        else {
            this.model = new Movies(this.prevLink);
            this.model
                .getAllMovies()
                .then(movies => {
                    this.view = new MovieListView(movies);
                    this.prevLink = movies.pagination.links.prev; 
                }); 
        }; 
    //     document.getElementById('prev').addEventListener('click', this.prevButtonPressed());
     };
        // nextButtonPressed.addEventListener('click', this.nextButtonPressed()); 
        // prevButtonPressed.addEventListener('click', this.prevButtonPressed());
};
new MovieList();




