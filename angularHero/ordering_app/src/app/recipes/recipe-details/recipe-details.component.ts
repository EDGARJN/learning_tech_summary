import { Component, Input} from '@angular/core';
import { Recipe } from '../recipe.model';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { RecipeService } from 'src/app/services/recipe/recipe.service';


@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent{
  constructor(private recipeService:RecipeService){}
 @Input() recipe:Recipe;
 
toShopingList(ingr:Ingredient[]){
 this.recipeService.addToshopingList(ingr)
}
}
