import { Component, ElementRef, HostBinding, HostListener, Input, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingService } from '../services/shopping/shopping.service';

@Component({
  selector: 'app-shoping-list',
  templateUrl: './shoping-list.component.html',
  styleUrls: ['./shoping-list.component.css']
})
export class ShopingListComponent implements OnInit {
  constructor(private elRe:ElementRef, private shopingService:ShoppingService){}

  @Input() element: {name:String, amount:number}
  ingredients:Ingredient[];

  @HostListener("mouseenter") onMouseOver(){
   console.log("User Alive Here");
  }

  @HostListener("mouseleave") onMouseLeave(){
    console.log("He LogOUT");
  }

  ngOnInit(): void {
    this.ingredients = this.shopingService.fetchIngredient();
    this.shopingService.newIngredients.subscribe((ings:Ingredient[])=>{
      this.ingredients = ings;
    });
  }

}
