import {Directive, Input, ElementRef } from '@angular/core';

@Directive( {
    selector:'[highlight]',
    host:{
        '(mouseenter)':'onMouseEnter()',
        '(mouseleave)':'onMouseLeave()'
    }
})
export class HighlightDirective {
    private orignalBackground;
    @Input() hoverColor;

    constructor(private el:ElementRef){
        this.orignalBackground = el.nativeElement.style.backgroundColor;        
    }

    onMouseEnter(){
        this.el.nativeElement.style.backgroundColor = this.hoverColor;
    }

    onMouseLeave(){
        this.el.nativeElement.style.backgroundColor = this.orignalBackground;
    }
}