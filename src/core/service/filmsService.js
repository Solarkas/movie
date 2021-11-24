import { EnvData } from '../constants/envData';
import { FilmModel } from '../../models/filmModel';

export class FilmsService {
    static #DefaultSearchValue = 'Marvel';

   static #Urls = {
     Main: (searchByName = FilmsService.#DefaultSearchValue) => `http://omdbapi.com?s=${searchByName}&apikey=${EnvData.FilmsApiKey}`,
     FilmById: (filmId) => `http://omdbapi.com/?i=${filmId}&apikey=${EnvData.FilmsApiKey}`,
   }

   async getFilms() {
     try {
       const response = await fetch(FilmsService.#Urls.Main());
       const data = await response.json();
       const filmModels = data.Search.map((filmData) => {
         return new FilmModel({
         Poster: filmData.Poster,
         Title: filmData.Title,
         Year: filmData.Year,
         ImdbId: filmData.ImdbId,
       });
      });
       return filmModels;
     } catch (error) {
       return {
         error: error.message,
       };
     }
   }

   async saveFilms() {

   }

   async addFilmToFavorites() {

   }

   async removeFilmFromFavorites(){
       
   }
}
