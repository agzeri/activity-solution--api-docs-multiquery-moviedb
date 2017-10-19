function castMemMov(data) {
  var castMovie = document.querySelector('.cast-count mark')
  var cast = data.body.cast.length
  //console.log(data);
  castMovie.innerHTML = cast
}
export default castMemMov;
