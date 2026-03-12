import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlightCard]',
  standalone: true
})
export class HighlightCard {

  @Input() overcolor: string = 'white'
  @Input() outcolor: string = 'white'

  constructor(private ele:ElementRef) {
    ele.nativeElement.style.backgroundColor = this.overcolor
    console.log(ele);
   }
  
  @HostListener('mouseover')
  over(){
    this.ele.nativeElement.style.backgroundColor = this.overcolor
   }
   @HostListener('mouseout')
   out(){
    this.ele.nativeElement.style.backgroundColor = this.outcolor
   }
}
