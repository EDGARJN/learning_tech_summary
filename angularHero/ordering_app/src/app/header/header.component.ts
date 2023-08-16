import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector:"app-hader",
    templateUrl:"./header.component.html",
    styleUrls:["./header.component.css"]
})

export class HeaderComponent{
   @Output() feauture = new EventEmitter<number>;
    switchOwner(id:number){
        this.feauture.emit(id);
    };
}