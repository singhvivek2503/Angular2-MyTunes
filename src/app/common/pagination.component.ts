import { Component, Input } from '@angular/core';
import {Router,ActivatedRoute,Params} from '@angular/router';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { IPager } from './models/ipager';

@Component({
    selector:'pagination-component',
    template:`
    <nav *ngIf="pager">
        <ul class="pagination">
            <li *forRange="pager.pages;let i=index" (click)="goToPage(i)"><a>{{i}}</a></li>
        </ul>
    </nav>
    `,

})
export class PaginationComponent implements OnInit{
    @Input() pager:IPager;
    @Input() pathName:string;
    private query:string;

    constructor(private router:Router,private activatedRoute:ActivatedRoute){}

    ngOnInit():any{        
        this.query = this.activatedRoute.snapshot.queryParams["query"];
    }
    
    goToPage(i:number){        
        this.router.navigate(['/'+this.pathName],{queryParams:{query:this.query,page:i}});
    }
}