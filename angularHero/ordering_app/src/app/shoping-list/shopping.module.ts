import { NgModule } from "@angular/core";
import { ShopingListComponent } from "./shoping-list.component";
import { ShoppingEditComponent } from "./shopping-edit/shopping-edit.component";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
    declarations:[
    ShopingListComponent,
    ShoppingEditComponent,
    ],
    imports:[
        BrowserModule
    ]
})
export class ShoppingModule{

}