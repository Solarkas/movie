import { renderFilmComponent } from '../core/components/filmComponent';
import { Routes } from '../css/constants/routes';
import { View } from './View';

export class FavoritesView extends View {
 static #Text = {
   Title: `Your Favorite Films`,
   SeeAllFilms: `See all films`
 }

  render(favoriteFilmModels = []) {
    const container = document.createElement('div');
    container.className = 'favorite-container';

    const titleHTML = document.createElement('h1');
    titleHTML.className = 'film-cards-container__title';
    titleHTML.textContent = FavoritesView.#Text.Title;

    const linksBlock = document.createElement('div');
    linksBlock.className = 'film-cards-container__links-block';
    const allFilmsLink = document.createElement('a');
    allFilmsLink.href = `#${Routes.Main}`;
    allFilmsLink.className = 'link-button film-cards-container__link-button';
    allFilmsLink.textContent = FavoritesView.#Text.SeeAllFilms;
    linksBlock.append(allFilmsLink);

    const filmsContainer = document.createElement('div');
    filmsContainer.className = 'film-cards-container';
    favoriteFilmModels.forEach((filmModel)=> {
        const filmHTML = renderFilmComponent({ filmModel });
        filmsContainer.append(filmHTML);
    })

    container.append(titleHTML, linksBlock, filmsContainer);

    this.getRoot().append(container);
  }
}
