import { Routes } from "../css/constants/routes";

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

    getViewParams(routeName) {
    let paramsForRender = [];
    if (routeName === Routes.Main){
        paramsForRender = [this.#allFilms];
    } else if (routeName === Routes.Favorites){
        paramsForRender = [this.#favoriteFilms];
    } else if (routeName === Routes.Film) {
        paramsForRender = [];
    }
     return paramsForRender;
    }

    async init() {
      this.#allFilms = await this.#service.getFilms();
      this.#allFilms.forEach((filmModel) => {
          
      });
      this.#router.init();
    }
}
