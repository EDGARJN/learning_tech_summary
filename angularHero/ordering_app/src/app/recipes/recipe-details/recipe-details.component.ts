import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ShoppingService } from 'src/app/services/shopping/shopping.service';
import { Ingredient } from 'src/app/shared/ingredient.model';


@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent{
  constructor(private shoppingService:ShoppingService){}
 @Input() recipe:Recipe;
 
toShopingList(ingr:Ingredient[]){
 ingr.forEach((ing)=> this.shoppingService.shopIngredient(ing))
}
}
