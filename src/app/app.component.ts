import { Component, inject } from '@angular/core';
import { CommonModule} from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Oauth2Service } from './services/oauth2.service';

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

  login() {
    this.authService.login();
  }

  logout() {
    this.authService.logout();
  }

  get profile() {
    let profile:any = this.authService.getProfile(); 
    return profile ? profile: null;
  }

//   get showData() {
//     let profile = this.authService.getProfile();
//     console.log("profile>>>",profile);
//     return profile ? profile : null;
//   }

  // authService = inject(AuthService)
  
  // login() {
  //   this.authService.login();
  // }

  // logout() {
  //   this.authService.logout();
  // }

}
