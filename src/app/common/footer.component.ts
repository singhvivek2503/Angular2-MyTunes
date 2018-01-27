import {Component }from '@angular/core'; 
@Component( {
    selector:'footer-component', 
    templateUrl:'footer.component.html', 
    styles:[`
    .footer {
        position:absolute; 
        botton:0; 
        width:100 % ; 
        height:60px; 
        background - color:#f5f5f5
        }
    .container {
        height:60px
    }
    a {
        height:60px; 
        line - height:60px; 
        margin - right:5rem; 
    }
    `]

})
export class FooterComponent {
    public year :number=(new Date()).getFullYear();
}