import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from '../services/recipe/recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  finalRecipe:Recipe;

  constructor(private recipeService:RecipeService){
  
  }

  ngOnInit(){
    this.recipeService.single_recipe.subscribe((recipe:Recipe)=>{
      this.finalRecipe = recipe;
      alert(recipe.name)
    })
  }


}
