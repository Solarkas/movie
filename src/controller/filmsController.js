//proverka
import { Routes } from '../core/constants/routes';

export class FilmsController {
    #router

    #allFilms

    #service

    #favoriteFilms

    constructor(router, service) {
      this.#router = router;
      this.#service = service;
      this.#allFilms = [];
      this.#favoriteFilms = [];
    }

    async #fetchAllFilms() {
      if (this.#allFilms.length === 0) {
        const data = await this.#service.getFilms();
        if (!data.error){
          this.#allFilms = data;
        }
      }
    }

    // work
    async getViewParams(routeName) {
      let paramsForRender = [];

      await this.#fetchAllFilms();
      this.#favoriteFilms = await this.#service.getFavoriteFilms();

      // this.#allFilms = await this.#service.getFilms();
      if (routeName === Routes.Main) {
        paramsForRender = [this.#allFilms];
      } else if (routeName === Routes.Favorites) {
        paramsForRender = [this.#favoriteFilms];
      } else if (routeName === Routes.Film) {
        paramsForRender = [];
      } else {
        paramsForRender = [this.#allFilms];
      }
      return paramsForRender;
    }

    // no work
    async handleFavoriteButtonClick(isFavorite, filmId) {
      console.log('isFavorite', isFavorite, filmId);
      if (isFavorite) {
        await this.#service.removeFilmFromFavorites(this.#allFilms, this.#favoriteFilms, filmId);
      } else {
        await this.#service.addFilmToFavorites(this.#allFilms, this.#favoriteFilms, filmId);
      }

      await this.#router.updateView();
    }

    // work
    async init() {
      this.#router.init();
    }
}
