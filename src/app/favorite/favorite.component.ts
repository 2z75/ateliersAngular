import { Component } from '@angular/core';
import { Favorite } from './models/favorite';

@Component({
  selector: 'app-favorite',
  standalone: true,
  imports: [],
  templateUrl: './favorite.component.html',
  styleUrl: './favorite.component.scss'
})
export class FavoriteComponent {

  favorites: Favorite[] = [
    {
        id: 1,
        name: "Produit 1"
    },
    {
        id: 2,
        name: "Produit 2"
    },
];

  addToFavorite(newItem: Favorite): void {
    const exists: boolean = this.favorites.some(item => item.id === newItem.id);

    if (exists) {
      console.log("Déjà présent dans les favoris");
    } else {
      this.favorites.push(newItem);
      console.log("Ajouté aux favoris");
    }
  }
}

