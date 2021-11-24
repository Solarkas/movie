import { FilmsView } from "../../views/filmsView";
import { FilmView } from "../../views/FilmView";

export class Router {
    #controller

    #root

    #routes

    constructor(routes, root) {
      this.#routes = routes;
      this.#root = root;
      this.#controller = null;
    }

    setController(controller) {
      this.#controller = controller;
    }

    #getRouteInfo() {
      const { location } = window;
      const { hash } = location;

      return {
        routeName: hash.slice(1),
      };
    }

    #hashChange() {
      const routeInfo = this.#getRouteInfo();
      
      const TargetView = this.#routes[routeInfo.routeName] || FilmsView;
      if (TargetView) {
        this.#root.innerHTML = '';
        const paramsForRender = this.#controller.getViewParams(routeInfo.routeName);
        const targetView = new TargetView(this.#root);
        targetView.render(...paramsForRender);
      }
    }

    init() {
      window.addEventListener('hashchange', this.#hashChange.bind(this));
      this.#hashChange();
    }
}
