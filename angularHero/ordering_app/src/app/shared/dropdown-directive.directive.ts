import { Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appDropdownDirective]'
})
export class DropdownDirectiveDirective {

 

  constructor() { }

  @HostBinding('class.open') isOpen:boolean =false;

  @HostListener("click") onMouseOver(){
     this.isOpen = !this.isOpen;

  }

  @HostListener("document:keypress",["$event"]) keyPress(event:KeyboardEvent){
    console.log(event.key)
    event.key == "a"?console.log("true") : console.log("false")
  }


}
