import { EventEmitter, Injectable, Output } from "@angular/core";
import { Recipe } from "src/app/recipes/recipe.model";

@Injectable({providedIn:"root"})
export class RecipeService{
    // constructor(private recipeTable:Recipe[]){}
    recipeTable:Recipe[] = [];

    single_recipe = new EventEmitter<Recipe>();

    addRecipe(new_recipe:Recipe){
        this.recipeTable.push(new_recipe);
    }

    fetchRecipe(){
        return this.recipeTable;
    }
}