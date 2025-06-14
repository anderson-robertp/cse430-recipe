import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RecipeService } from '../recipe.service';

import { Recipe } from '../recipes.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'rb-recipe-list',
  standalone: false,
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css',
  
})
export class RecipeListComponent implements OnInit {
  
  recipes: Recipe[];
  subscription: Subscription

  constructor(
    private recipeService: RecipeService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.subscription = this.recipeService.recipeChanged.subscribe(
      (recipes: Recipe[]) => {
        this.recipes = recipes;
      }
    )
    this.recipes = this.recipeService.getRecipes();
  }

  onNewRecipe() {
    this.router.navigate(['new'], {
      relativeTo: this.route});
  }

  ngOnDdestroy() {
    this.subscription.unsubscribe();
  }
}