import { Component, inject } from '@angular/core';
import { CommonModule} from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Oauth2Service } from './services/oauth2.service';
import { Router } from '@angular/router';
// import { CLIENT_ID } from './shared/config';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'oAuth2_angular';
  private authService = inject(Oauth2Service);
  private router = inject(Router);

  login() {
    this.authService.login();
  }

  logout() {
    this.authService.logout();
    // this.router.navigate([`https://test.gsis.gr/oauth2server/logout/${{CLIENT_ID}}/?url=https://localhost:4200/`]);
  }

  get profile() {
    let profile:any = this.authService.getProfile(); 
    return profile ? profile: null;
  }
}
