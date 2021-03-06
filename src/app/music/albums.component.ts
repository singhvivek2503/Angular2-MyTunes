import { HighlightDirective } from '../common/directives/highlight.directive';
import {Component }from '@angular/core'; 
import {IPager }from '../common/models/ipager'; 
import {MusicService }from './services/music.srv'; 
import {ActivatedRoute }from '@angular/router'; 
import {OnInit }from '@angular/core/src/metadata/lifecycle_hooks'; 
import {EllipsisPipe }from '../common/pipes/ellipsis.pipe'; 
import {PaginationComponent }from '../common/pagination.component'; 
import {IAlbum, AlbumImageSize }from './models/ialbum'; 

@Component( {
    selector:'albums-component', 
    templateUrl:'albums.component.html'
})
export class AlbumsComponent implements OnInit {
    public albums:Array < IAlbum >= []; 
    public albumImageSize:AlbumImageSize = AlbumImageSize.MEDIUM; 
    public pager:IPager; 
    public isLoading:boolean =true;
    constructor(private musicService:MusicService, private route:ActivatedRoute) {}

    ngOnInit() {
        this.route.queryParams.subscribe(param=>{
            this.albumsSearch(this.route.snapshot.queryParams.query,this.route.snapshot.queryParams.page)
        });        
    }

    albumsSearch(query:string, page:any) {
        this.isLoading = true;
        if (query) {
            this.musicService.albumsSearch(query, parseInt(page))
            .subscribe(res =>  {
                this.albums = res.albums; 
                this.pager = res.pager; 
                this.isLoading = false;
            })
        }
        else {
            this.albums = []; 
            this.isLoading = false;
        }
    }

    trackByFn(index,item){
        return index;
    }
}