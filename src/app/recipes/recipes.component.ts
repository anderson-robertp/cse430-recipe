import { Component, OnInit } from '@angular/core';

import { Recipe } from './recipes.model';

@Component({
  selector: 'rb-recipes',
  standalone: false,
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css',
})
export class RecipesComponent {
  selectedRecipe: Recipe;

  constructor() {}

  ngOnInit() {
    
  }
}
