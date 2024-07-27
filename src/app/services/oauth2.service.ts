import { Injectable,inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthConfig, OAuthService } from 'angular-oauth2-oidc';
import { CLIENT_PWD, CLIENT_ID } from '../shared/config';

@Injectable({
  providedIn: 'root'
})
export class Oauth2Service {
  private oAuthService = inject(OAuthService);
  
  constructor() {
    this.initConfiguration();
    console.log(">>>",window.location.origin);
  }

  initConfiguration() {
    const authConfig: AuthConfig = {
        // issuer: 'https://idsvr4.azurewebsites.net',
        issuer: 'https://test.gsis.gr/oauth2servergov',
        strictDiscoveryDocumentValidation: false,
        clientId: CLIENT_ID,
    // clientId: 'spa',
        dummyClientSecret: CLIENT_PWD,
        redirectUri: window.location.origin,
        scope: 'read',

      // URL of the login, logout, and silent refresh endpoints
        loginUrl: 'https://test.gsis.gr/oauth2servergov/oauth/authorize',
        logoutUrl: 'https://test.gsis.gr/oauth2servergov/logout',
        tokenEndpoint: 'https://test.gsis.gr/oauth2servergov/oauth/token',
        userinfoEndpoint: 'https://test.gsis.gr/oauth2servergov/userinfo?format=xml',

        oidc: true,
        responseType: 'code',
        showDebugInformation: true,  // Turn off debug mode
    };

    this.oAuthService.configure(authConfig);
    this.oAuthService.loadDiscoveryDocumentAndTryLogin();
  }

  login() {
    this.oAuthService.initImplicitFlow();
  }

  logout() {
    this.oAuthService.revokeTokenAndLogout();
    this.oAuthService.logOut();
  }

  getProfile() {
    return this.oAuthService.getIdentityClaims();
  }

  getToken() {
    return this.oAuthService.getAccessToken();
  }
}
