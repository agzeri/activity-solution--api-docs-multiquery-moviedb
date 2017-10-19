
function topSecondRatedMovie(data) {
  var titleMovie= document.querySelector('.movie-title mark')
  var movieId = data.body.results[1].id
  var movie = data.body.results[1].original_title
  // console.log(movie);
  titleMovie.innerHTML = movie
  return movieId
}



export default topSecondRatedMovie;
