import * as genresAPI from "./fakeGenreService";
import http from "./httpsService";
import { apiUrl } from "../config.json";

const movies = [];
const url = apiUrl + "/movies";

export function getMovies() {
  return http.get(url);
}

export function getMovie(id) {
  return http.get(url + "/" + id);
}

export function saveMovie(movie) {
  console.log(movie);
  if (movie._id) {
    const body = { ...movie };
    delete body._id;

    return http.put(url + "/" + movie._id, body);
  } else {
    return http.post(url, movie);
  }
}

export function deleteMovie(id) {
  let movieInDb = movies.find(m => m._id === id);
  movies.splice(movies.indexOf(movieInDb), 1);
  return movieInDb;
}
