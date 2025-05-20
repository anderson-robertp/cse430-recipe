import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';

import { Recipe } from '../recipes.model';

@Component({
  selector: 'rb-recipe-list',
  standalone: false,
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css',
  
})
export class RecipeListComponent implements OnInit {
  
  recipes: Recipe[] = [];

  constructor(private recipeService: RecipeService) {}

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }
}
