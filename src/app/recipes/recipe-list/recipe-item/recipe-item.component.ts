import { Component, Input, OnInit} from '@angular/core';

import { Recipe } from '../../recipes.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'rb-recipe-item',
  standalone: false,
  templateUrl: './recipe-item.component.html',
  styleUrl: './recipe-item.component.css'
})
export class RecipeItemComponent {
  @Input() recipe: Recipe;

  
  
  onSelected() {
    this.recipeService.recipeSelected.emit(this.recipe);
  }

  constructor(private recipeService: RecipeService) {}

  ngOnInit() {}
}
