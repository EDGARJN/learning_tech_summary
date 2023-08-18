import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appItemColor]'
})
export class ItemColorDirective implements OnInit {

  // set custom fontSize
  @Input() defaultFontSize:string = '30px';
  @Input() highLightFontSize:string = '60px';

  constructor(private elR:ElementRef, private renderer:Renderer2) { }

  ngOnInit(): void {
    // this.renderer.setStyle(this.elR.nativeElement, "backgroundColor","blue");
  }

  // this is a same as renderer2 but rendere2 is good and can be used for
  // complex DOM manipulation compare to Hostbinding
  @HostBinding("style.fontSize") txtSize:string; 

  @HostListener("mouseenter") mouseHover(mous:Event){
    this.renderer.setStyle(this.elR.nativeElement, "backgroundColor","blue");
    this.txtSize = this.highLightFontSize;
  }

  @HostListener("mouseleave") mouseLeave(mous:Event){
    this.renderer.setStyle(this.elR.nativeElement, "backgroundColor","transparent");
    this.txtSize = this.defaultFontSize;
  }

}
