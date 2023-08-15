import { Component, Input } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shoping-list',
  templateUrl: './shoping-list.component.html',
  styleUrls: ['./shoping-list.component.css']
})
export class ShopingListComponent {
  @Input() element: {name:String, amount:number}
  ingredients:Ingredient[] = [
    new Ingredient("Apples",5),
    new Ingredient("Onion",0.5),
    new Ingredient("Cassava",12)
  ]

}
