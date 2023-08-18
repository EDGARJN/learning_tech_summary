import { Component, ElementRef, ViewChild } from '@angular/core';
import { ShoppingService } from 'src/app/services/shopping/shopping.service';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
  constructor(private shoppingService:ShoppingService){}

  keyVal:string;

  @ViewChild("amount",{static:true}) amount:ElementRef;
  @ViewChild("name",{static:true}) gname:ElementRef;

  collectData(){
    this.shoppingService.shopIngredient(new Ingredient(this.gname.nativeElement.value,this.amount.nativeElement.value))
  }

}
