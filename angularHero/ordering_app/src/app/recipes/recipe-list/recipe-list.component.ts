import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  @Output() wasSelected = new EventEmitter<Recipe>();
  recipes:Recipe[] = [new Recipe("Sambusa","It includes sausages","https://shorturl.at/yBDE6"), new Recipe("Vegeterian Recipe","specific for meat hater","https://shorturl.at/belBR")];

  addRecipe(){
    this.recipes.push( new Recipe("Vegeterian Recipe","specific for meat hater","https://shorturl.at/belBR"))
  }

  updateWasSelected(rec:Recipe){
    this.wasSelected.emit(rec)
  }
    
}
