import { Component } from '@angular/core';

import { Recipe } from '../recipes.model';

@Component({
  selector: 'rb-recipe-list',
  standalone: false,
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://www.pexels.com/photo/close-up-photo-of-vegetable-salad-1640770/'),
    new Recipe('Another Test Recipe', 'This is simply a test', 'https://www.pexels.com/photo/close-up-photo-of-vegetable-salad-1640770/')
  ];
}
