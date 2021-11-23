import { View } from './View';

export class FavoritesView extends View {
  render() {
    const container = document.createElement('div');
    container.textContent = 'FavoritesView';
    this.getRoot().append(container);
  }
}
