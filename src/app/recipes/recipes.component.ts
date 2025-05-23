import { Component, OnInit } from '@angular/core';

import { Recipe } from './recipes.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'rb-recipes',
  standalone: false,
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css',
  providers: [
    RecipeService
  ],
})
export class RecipesComponent {
  selectedRecipe: Recipe;

  constructor(private recipeService: RecipeService) {}

  ngOnInit() {
    this.recipeService.recipeSelected.subscribe(
      (recipe: Recipe) => {
        this.selectedRecipe = recipe;
      }
    );
  }
}
