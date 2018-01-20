import { IAlbum, AlbumImageSize } from "app/music/models/ialbum";
import { ISong } from './isong';

export class Album implements IAlbum{

    constructor(public id: string,
                public name:string,
                public artist:string,
                public url:string,
                public images?:Array<string>,
                public songs?:Array<ISong>){
    
        }

    public getImage(size:AlbumImageSize){
        let image=this.images.find((image)=>(image["size"]==size));
        return image?image['#text']:undefined;
    }
}