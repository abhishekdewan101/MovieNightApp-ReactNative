import { Observable } from "rxjs";
import { TMDB_BASE_URL, TMDB_DISCOVER_RESOURCE, TMDB_ACCESS_KEY } from "./AppConstants";

export function getMovieList() {
    return Observable.create(observer => {
        fetch(TMDB_BASE_URL + TMDB_DISCOVER_RESOURCE + TMDB_ACCESS_KEY)
        .then(res => res.json())
        .then(movieList => observer.next(movieList));
    });
}