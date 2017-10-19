import request from 'superagent';
import topSecondRatedMovie from './topSecondRatedMovie.js';
import castMemberMovie from './castMemberMovie.js';

var key = 'b21e4e4688626d2b454b9bf55959a588'

request
  .get('https://api.themoviedb.org/3/movie/top_rated?api_key='+key)
  .then(topSecondRatedMovie)
  .then(function(id){
     request
       .get('https://api.themoviedb.org/3/movie/'+id+'/credits?api_key='+key)
       .then(castMemberMovie)
  })
