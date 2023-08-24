import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from '../services/recipe/recipe.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  finalRecipe:Recipe;

  constructor(private recipeService:RecipeService, private http:HttpClient){
  
  }

  ngOnInit(){
    this.recipeService.single_recipe.subscribe((recipe:Recipe)=>{
      this.finalRecipe = recipe;
      alert(recipe.name)
    })
  }

  addUSer(){
    this.http.post("http://127.0.0.1:3900/api/user/user_data", {"fname":"TESTER", "mname":"TESTERMID", "lname":"TESTERLAST","email":"ed@gm","contact":"065873482",'staff_id':89} ).subscribe((response:Response)=>{
      console.log(response);
    });

  }


}
