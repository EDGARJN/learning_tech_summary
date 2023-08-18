import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from 'src/app/services/recipe/service.recipe';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent {

  constructor(private recipeService:RecipeService){}


  @Input() recipes:Recipe;
  // selectedRecipe:Recipe;

  updateEmitter(){
    this.recipeService.single_recipe.emit(this.recipes)
  }
}
