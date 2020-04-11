import {Directive, ElementRef,Renderer2} from "@angular/core";

@Directive({
  selector: '[appStyle]'
})
export class StyleDirective{
  constructor(private  elRef: ElementRef,
              private  renderer: Renderer2 ) {
   // console.log(elRef);
    this.renderer.setStyle(this.elRef.nativeElement, 'color', 'blue');
    // elRef.nativeElement.style.color = 'red'
  }
}
