import { Component } from '@angular/core';
import { IAlbum, AlbumImageSize } from './models/ialbum';
import { ActivatedRoute } from '@angular/router';
import { MusicService } from './services/music.srv';
import { Album } from './models/album';
@Component({
    selector:'album',
    templateUrl:'album.component.html'
})
export class AlbumComponent{
    public  album:Album;
    private imageSize:AlbumImageSize = AlbumImageSize.LARGE;

    constructor(private route:ActivatedRoute,private musicService: MusicService){
        // console.log(this.route.snapshot.queryParams.id);
        if(this.route.snapshot.queryParams.id){
            
            this.getAlbumInfo(this.route.snapshot.queryParams.id);
        }
    }

    getAlbumInfo(id:string){
        this.musicService.albumInfo(id)
        .subscribe(album=>{
            
            this.album = album;
            var image = this.album.getImage(AlbumImageSize.LARGE);
        })
    }
}