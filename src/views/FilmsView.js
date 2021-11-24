import { Routes } from '../css/constants/routes';
import { View } from './View';
import InFavoritesImage from '../assets/icons/heart-outlined.png';
import NotInFavoritesImage from '../assets/icons/heart.png';
import { renderFilmComponent } from '../core/components/filmComponent';

export class FilmsView extends View {
    static #Text = {
        SeeFavoritesFilms: 'See Favorite Films',
        Title: 'All Films',
    }

  #renderSeeFavoriteButton() {
    const container = document.createElement('div');
    container.className = 'film-cards-container__links-block';

    const seeFavoritesButton = document.createElement('a');
    seeFavoritesButton.href = `#${Routes.Favorites}`;
    seeFavoritesButton.className = 'link-button film-cards-container__link-button';
    seeFavoritesButton.textContent = FilmsView.#Text.SeeFavoritesFilms;
    container.append(seeFavoritesButton);
    return container;
  }

 

  render(filmModels = []) {
    const container = document.createElement('div');
    container.className = 'films-container';

    const titleHTML = document.createElement('h1');
    titleHTML.className = 'film-cards-container__title';
    titleHTML.textContent = FilmsView.#Text.Title;
    
    const seeFavoritesButtonContainer = this.#renderSeeFavoriteButton();

    const filmsContainer = document.createElement('div');
    filmsContainer.className = 'film-cards-container';
    filmModels.forEach((filmModel) => {
        const filmHTML = renderFilmComponent({ filmModel });
        filmsContainer.append(filmHTML);
    });

    container.append(titleHTML, seeFavoritesButtonContainer, filmsContainer);
    this.getRoot().append(container);
  }
}
