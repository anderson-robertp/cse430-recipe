import { Component, Input, OnInit } from '@angular/core';

import { Recipe } from '../recipes.model';



@Component({
  selector: 'rb-recipe-detail',
  standalone: false,
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.css'
})
export class RecipeDetailComponent {
  @Input() recipe: Recipe;

  constructor() {}
  ngOnInit() {}

}
