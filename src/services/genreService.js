import http from "./httpsService";
import config from "../config.json";
export const genres = [];
const url = config.apiUrl + "/genres";

export function getGenres() {
  return http.get(url);

  //   return response.data;
}
