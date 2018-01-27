import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map'
import { Album } from 'app/music/models/album';
import { IAlbum } from '../models/ialbum';
import { element } from 'protractor';
import { IPager } from '../../common/models/ipager';
import { Pager } from '../../common/models/pager';
import { ISong } from '../models/isong';
import { Song } from '../models/song';

@Injectable()
export class MusicService{
    private appId ='7d8c73df5fede25a4acb0a5950225d87';

    constructor(private http:Http){

    }

    albumsSearch(query:string,page:number=0){
        return new Observable<any>(obs=>{
            let pageParam:number=page+1;
            let url = "https://ws.audioscrobbler.com/2.0/?method=album.search&album="+query
                        + "&page="+pageParam+"&api_key="+this.appId+'&format=json';
            this.http.get(url)
            .map(res=>{
                let resJ = res.json();
                var albums:Array<IAlbum>=[];
                let results=resJ.results;
                results.albummatches.album.forEach(element => {
                    albums.push(new Album(element["mbid"],element["name"],element["artist"]
                                ,element["url"],element["image"]))
                });

                let pager:IPager = new Pager(<number>results["opensearch:itemsperpage"],
                <number>results["opensearch:startIndex"],
                <number>results["opensearch:totalResults"]);

                return{
                    albums:albums,
                    pager:pager
                }
            })
            .subscribe(res=>{
                obs.next(res);
            })
        })
    }

    albumInfo(id:string){
        return new Observable<any>(obs=>{
            let url = "https://ws.audioscrobbler.com/2.0/?method=album.getInfo&mbid="+id
                        + "&format=json&api_key="+this.appId;
            this.http.get(url)
            .map(res=>{
                let resJ = res.json();
                let data = resJ.album;
                var songs:Array<ISong>=[];
                data.tracks.track.forEach(data => {
                    songs.push(new Song(data.name));
                });

                let album:IAlbum=new Album(data["mid"],data["name"],data["artist"],data["url"],data["image"],songs);
                return album;
            })
            .subscribe(res=>{
                obs.next(res);
            })
        })
    }
}