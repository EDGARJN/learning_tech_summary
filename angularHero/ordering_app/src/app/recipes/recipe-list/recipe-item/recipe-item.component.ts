import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from 'src/app/services/recipe/recipe.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent {

  constructor(private recipeService:RecipeService, private route:Router, private curR:ActivatedRoute){}


  @Input() recipes:Recipe;
  @Input() id:number;
  // selectedRecipe:Recipe;

  updateEmitter(){
    // this.recipeService.single_recipe.emit(this.recipes)
    this.route.navigate([this.id],{relativeTo:this.curR})
  }
}
