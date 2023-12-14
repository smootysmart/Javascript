//65130500032 Noppakrit Nitichaisatit
class Movies {
  //your code here...

  constructor() {
    this.movies = [];
  }

  getAllMovies() {
    return this.movies;
  }

  addMovie(title, director, year, genre) {
    if(!title || !director || !year || !genre){
      return undefined
    }

    const duplicate = this.movies.find((movie) => 
      movie.title.toLowerCase() === title.toLowerCase() && 
      movie.director.toLowerCase() === director.toLowerCase()
    )

    if(duplicate){
      return undefined
    }

    const newMovie =  {title, director, year,genre}
    this.movies.push(newMovie);
    return newMovie;
  }

  updateMovie(title, updateDetails) {
    const movieIndex = this.movies.findIndex((movie) => movie.title.toLowerCase() === title.toLowerCase())

    if(movieIndex === -1){
      return undefined;
    }

    this.movies[movieIndex] = {...this.movies[movieIndex],...updateDetails}
    // Object.assign(this.movies[movieIndex], updateDetails)
    return this.movies[movieIndex]
  }

  deleteMovieByTitle(title) {
    const movieIndex = this.movies.findIndex((movie) => movie.title.toLowerCase() === title.toLowerCase())

    if(movieIndex === -1){
      return "No movie has been deleted"
    }

    const deleted = this.movies.splice(movieIndex, 1)[0];
    return deleted
  }
}

module.exports = Movies;