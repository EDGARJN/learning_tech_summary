import { Component, ElementRef, HostBinding, HostListener, Input } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shoping-list',
  templateUrl: './shoping-list.component.html',
  styleUrls: ['./shoping-list.component.css']
})
export class ShopingListComponent {
  constructor(private elRe:ElementRef){}

  @Input() element: {name:String, amount:number}
  ingredients:Ingredient[] = [
    new Ingredient("Apples",5),
    new Ingredient("Onion",0.5),
    new Ingredient("Cassava",12)
  ]

 

  @HostListener("mouseenter") onMouseOver(){
   console.log("User Alive Here");
  }

  @HostListener("mouseleave") onMouseLeave(){
    console.log("He LogOUT");
  }

}
