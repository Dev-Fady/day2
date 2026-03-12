import { Directive, ElementRef, HostListener, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[appHighlightCard]',
  standalone: true
})
export class HighlightCard implements OnChanges {

  @Input() overcolor: string = 'white'
  @Input() outcolor: string = 'white'

  constructor(private ele:ElementRef) {
    // ele.nativeElement.style.backgroundColor = this.outcolor
    console.log(ele);
   }
  //  lifecycle hook => ngOnChanges => called when any input property changes
  ngOnChanges(){
    this.ele.nativeElement.style.backgroundColor = this.outcolor
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
