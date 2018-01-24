import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from "./app.component";
import { HeaderComponent } from './common/header.component';
import { FooterComponent } from './common/footer.component';
import { WelcomeComponent } from './common/welcome.component';
import { AlbumsComponent } from './music/albums.component';
import { AlbumComponent } from './music/album.component';
import { LoginComponent } from './user/login.component';
import { RegistrationComponent } from './user/registration.component';
import { AuthGuard } from './common/guards/authGuard';


const APP_ROUTES: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: WelcomeComponent,canActivate:[AuthGuard]},
  {path: 'albums', component: AlbumsComponent,canActivate:[AuthGuard]},
  {path: 'album', component: AlbumComponent,canActivate:[AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'registration', component: RegistrationComponent},
];

export const routing = RouterModule.forRoot(APP_ROUTES);
