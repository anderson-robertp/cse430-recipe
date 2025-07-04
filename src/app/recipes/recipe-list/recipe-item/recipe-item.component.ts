import { Component, Input, OnInit} from '@angular/core';

import { Recipe } from '../../recipes.model';

@Component({
  selector: 'rb-recipe-item',
  standalone: false,
  templateUrl: './recipe-item.component.html',
  styleUrl: './recipe-item.component.css'
})
export class RecipeItemComponent {
  @Input() recipe: Recipe;
  @Input() index: number;

  ngOnInit() {}
}
