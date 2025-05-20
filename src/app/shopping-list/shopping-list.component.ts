import { Component } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shoppinglist.service';

@Component({
  selector: 'rb-shopping-list',
  standalone: false,
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css'
})
export class ShoppingListComponent {
  ingredients: Ingredient [] = [];

  constructor(private slService: ShoppingListService) {  }

  ngOnInit() {
    this.ingredients = this.slService.getIngredients();
    this.slService.ingredientChanged
      .subscribe(
        (ingredients: Ingredient[]) => {
          this.ingredients = ingredients;
        }
      );
  }
}
