import { Component } from '@angular/core';
@Component({
    selector:'welcome-component',
    templateUrl:'welcome.component.html'
    // template:` 
        
    // `,

})
export class WelcomeComponent{
    
    public moreInfo:boolean=false;
    showMoreInfo(moreInfo:boolean){
        this.moreInfo = !moreInfo;
    }
}