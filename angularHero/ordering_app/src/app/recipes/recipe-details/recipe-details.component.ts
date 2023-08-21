import { Component, Input, OnInit} from '@angular/core';
import { Recipe } from '../recipe.model';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { RecipeService } from 'src/app/services/recipe/recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit{
  constructor(private recipeService:RecipeService, private route:Router,private activeRoute:ActivatedRoute){}
 recipe:Recipe;
 
toShopingList(ingr:Ingredient[]){
 this.recipeService.addToshopingList(ingr)
}

ngOnInit(): void {
  this.activeRoute.params.subscribe((param:Params)=>{
    this.recipe = this.recipeService.getSpecificRecipe(+param["id"]);
})
  
}

// getRecipe(){
  

//   });

// }
}
