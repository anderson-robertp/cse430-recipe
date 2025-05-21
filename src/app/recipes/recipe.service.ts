import { EventEmitter, Injectable } from "@angular/core";

import { Recipe } from "./recipes.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shoppinglist.service";

@Injectable()

export class RecipeService {
    public recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            'A Test Recipe', 
            'This is simply a test', 
            'https://cdn-icons-png.flaticon.com/512/1041/1041373.png',
            [
                new Ingredient('Meat', 1),
                new Ingredient('French Fries', 20)
            ]),
        new Recipe(
            'Another Test Recipe', 
            'This is simply a test', 
            'https://cdn.pixabay.com/photo/2014/12/21/23/28/recipe-575434_1280.png',
            [
                new Ingredient('Buns', 2),
                new Ingredient('Meat', 1)
            ]
        )
    ];

    getRecipes() {
        return this.recipes.slice(); // return a copy of the recipes array
        
        console.log(this.recipes);
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }
    
    constructor(private slService: ShoppingListService) {}
}