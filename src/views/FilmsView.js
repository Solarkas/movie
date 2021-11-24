import { Routes } from '../css/constants/routes';
import { View } from './View';
import InFavoritesImage from '../assets/icons/heart-outlined.png';
import NotInFavoritesImage from '../assets/icons/heart.png';

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

  #renderFilmHTML(filmModel) {
    const container = document.createElement('div');
    container.className = 'film-card';

    const titleHTML = document.createElement('span');
    titleHTML.className = 'film-card__title';
    titleHTML.textContent = filmModel.getTitle();

    const imageHTML = document.createElement('img');
    imageHTML.src = filmModel.getPoster();
    imageHTML.className = 'film-card__poster';
    imageHTML.alt = filmModel.getTitle();

    const yearHTML = document.createElement('span');
    yearHTML.className = 'film-card__year';
    yearHTML.textContent = filmModel.getYear();

    const actionButton = document.createElement('button');
    actionButton.className = 'film-card__button';
    const actionButtonImg = document.createElement('img');
    actionButtonImg.className = 'film-card__button-img';
    if (filmModel.getIsFavorite()) {
      actionButtonImg.src = InFavoritesImage;
    } else {
      actionButtonImg.src = NotInFavoritesImage;
    }
    actionButton.append(actionButtonImg);

    container.append(titleHTML, imageHTML, yearHTML, actionButton);

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
        const filmHTML = this.#renderFilmHTML(filmModel);
        filmsContainer.append(filmHTML);
    });

    container.append(titleHTML, seeFavoritesButtonContainer, filmsContainer);
    this.getRoot().append(container);
  }
}
