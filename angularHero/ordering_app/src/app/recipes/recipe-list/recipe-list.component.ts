import { Component, ElementRef, EventEmitter, Injectable, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from 'src/app/services/recipe/recipe.service';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})

export class RecipeListComponent implements OnInit {
[x: string]: any;

  constructor(private recipeService: RecipeService) { }
  // @Output() wasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = this.recipeService.fetchRecipe();


  // [new Recipe("Sambusa","It includes sausages","https://shorturl.at/yBDE6"), new Recipe("Vegeterian Recipe","specific for meat hater","https://shorturl.at/belBR")];

  @ViewChild("name", { static: true }) recipe_name: ElementRef;
  @ViewChild("desc", { static: true }) recipe_desc: ElementRef;
  @ViewChild("imagePath", { static: true }) imgPth: ElementRef;


  regRecipe() {
    this.recipeService.addRecipe(
      new Recipe(this.recipe_name.nativeElement.value, this.recipe_desc.nativeElement.value, this.imgPth.nativeElement.value,[]));

  }

  updateWasSelected(rec: Recipe) {
    this.recipeService.single_recipe.emit(rec);
  }

  ngOnInit(): void {
    this.recipes.push(
      new Recipe("Sambusa",
    "It includes sausages",
    "https://shorturl.at/yBDE6",[new Ingredient("Ngano",4), new Ingredient("Cassava",40)]), 
    new Recipe("Vegeterian Recipe",
    "specific for meat hater",
    "https://shorturl.at/belBR",[new Ingredient("Spinachs",5)]))
  }

}
