import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipes.model';

@Component({
  selector: 'rb-recipe-list',
  standalone: false,
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css',
  
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://cdn-icons-png.flaticon.com/512/1041/1041373.png'),
    new Recipe('Another Test Recipe', 'This is simply a test', 'https://cdn.pixabay.com/photo/2014/12/21/23/28/recipe-575434_1280.png')
  ];

  constructor() { }

  ngOnInit() {}
}
