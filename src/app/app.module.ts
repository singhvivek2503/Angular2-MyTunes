import {BrowserModule }from '@angular/platform-browser'; 
import {NgModule }from '@angular/core'; 
import {FormsModule, ReactiveFormsModule }from '@angular/forms'; 
import {HttpModule }from '@angular/http'; 
import {routing} from './app.routing'; 
import {AppComponent }from './app.component'; 
import { LoginComponent } from 'app/user/login.component';
import { RegistrationComponent } from 'app/user/registration.component';
import { AlbumsComponent } from './music/albums.component';
import { AlbumComponent } from './music/album.component';
import { WelcomeComponent } from 'app/common/welcome.component';
import { HeaderComponent } from 'app/common/header.component';
import { FooterComponent } from 'app/common/footer.component';
import { PaginationComponent } from './common/pagination.component';
import { SearchComponent } from './common/search.component';
import { UserService } from './user/services/user.srv';
import { MusicService } from 'app/music/services/music.srv';
import { CountryService } from 'app/common/services/country.srv';
import { ForRangeDirective } from './common/directives/forRange.directive';
import { EllipsisPipe } from 'app/common/pipes/ellipsis.pipe';
import { AuthGuard } from 'app/common/guards/authGuard';

@NgModule( {
declarations:[
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    AlbumsComponent,
    AlbumComponent,
    WelcomeComponent,
    HeaderComponent,
    FooterComponent,
    PaginationComponent,
    SearchComponent,
    ForRangeDirective,
    EllipsisPipe
  ], 
imports:[
    BrowserModule, 
    FormsModule, 
    HttpModule, 
    routing,
    ReactiveFormsModule
  ], 
providers:[UserService,MusicService,CountryService,AuthGuard], 
bootstrap:[AppComponent],
exports: [ForRangeDirective]
})
export class AppModule {}
