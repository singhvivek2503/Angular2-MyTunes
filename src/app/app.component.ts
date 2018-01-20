import { Component } from '@angular/core';
import { ROUTER_CONFIGURATION,RouterOutlet } from '@angular/router';
import { AlbumComponent } from './music/album.component';
import { AlbumsComponent } from './music/albums.component';
import { LoginComponent } from './user/login.component';
import { RegistrationComponent } from './user/registration.component';
import { PaginationComponent } from './common/pagination.component';
import { FooterComponent } from './common/footer.component';
import { HeaderComponent } from './common/header.component';
import { SearchComponent } from './common/search.component';
import { WelcomeComponent } from './common/welcome.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']   
})
export class AppComponent {
  title = 'app works!';
}
