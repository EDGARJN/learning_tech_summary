import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent {
  finalRecipe:Recipe;

  assignRecipe(reci:Recipe){
    this.finalRecipe = reci;
  }


}
