import {Directive, Input, TemplateRef, ViewContainerRef, EmbeddedViewRef}from '@angular/core'; 

export class ForRangeContext {
    constructor(public index:number) {}
}

@Directive( {
    selector:'[forRange]'
})
export class ForRangeDirective {
    @Input()set forRange(value:number) {
        this.render(value); 
    }

    constructor(private templateRef:TemplateRef < any > , private viewContainer:ViewContainerRef) {}

    render(range:number) {
        for (let i = 0; i < range; i++) {
            let context = new ForRangeContext(i); 
            let view = this.viewContainer.createEmbeddedView(this.templateRef, context, i);            
            //view.setControl("index",i);
        }
    }
}