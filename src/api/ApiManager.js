import { TMDB_ACCESS_KEY, TMDB_BASE_URL, TMDB_DISCOVER_RESOURCE } from '../api/Constants'
import { Observable } from 'rxjs';

export function getMovieList() {
   return Observable.create(function(observer){
    fetch(TMDB_BASE_URL + TMDB_DISCOVER_RESOURCE + TMDB_ACCESS_KEY)
    .then(res => res.json())
    .then(movieData => observer.next(movieData));    
   });
}