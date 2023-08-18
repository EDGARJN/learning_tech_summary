import { EventEmitter, Injectable, Output } from "@angular/core";
import { Recipe } from "src/app/recipes/recipe.model";
import { Ingredient } from "src/app/shared/ingredient.model";
import { ShoppingService } from "../shopping/shopping.service";

@Injectable({providedIn:"root"})
export class RecipeService{
    // constructor(private recipeTable:Recipe[]){}
    constructor(private shoppingService:ShoppingService){}
    recipeTable:Recipe[] = [];

    single_recipe = new EventEmitter<Recipe>();

    addRecipe(new_recipe:Recipe){
        this.recipeTable.push(new_recipe);
    }

    fetchRecipe(){
        return this.recipeTable;
    }

    addToshopingList(ingr:Ingredient[]){
        this.shoppingService.fromRecipe(ingr)
    }
}