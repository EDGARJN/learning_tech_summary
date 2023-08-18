import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "src/app/shared/ingredient.model";

@Injectable({providedIn:"root"})
export class ShoppingService{
    private ingredientTable:Ingredient[] = [  new Ingredient("Apples",5),
    new Ingredient("Onion",0.5),
    new Ingredient("Cassava",12)];

    newIngredients = new EventEmitter<Ingredient[]>();

    shopIngredient(ingredient:Ingredient){
        this.ingredientTable.push(ingredient)
        this.newIngredients.emit(this.ingredientTable.slice());
    };

    fetchIngredient(){
        return this.ingredientTable.slice();
    }
}