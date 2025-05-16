import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

import { Recipe } from '../../recipes.model';

@Component({
  selector: 'rb-recipe-item',
  standalone: false,
  templateUrl: './recipe-item.component.html',
  styleUrl: './recipe-item.component.css'
})
export class RecipeItemComponent {
  @Input() recipe: Recipe;

  @Output() recipeSelected = new EventEmitter<void>();
  
  onSelected() {
    this.recipeSelected.emit();
  }

  constructor() {}

  ngOnInit() {}
}
