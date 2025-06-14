import { Component, OnInit, OnDestroy } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shoppinglist.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'rb-shopping-list',
  standalone: false,
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css'
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient [] = [];
  private igChangeSub: Subscription

  constructor(private slService: ShoppingListService) {  }

  ngOnInit() {
    this.ingredients = this.slService.getIngredients();
    this.igChangeSub = this.slService.ingredientChanged
      .subscribe(
        (ingredients: Ingredient[]) => {
          this.ingredients = ingredients;
        }
      );
  }

  onEditItem (index: number) {
    event.preventDefault();
    this.slService.startedEditing.next(index);
  }

  ngOnDestroy(): void {
    this.igChangeSub.unsubscribe();
  }
}
