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
  }

  initConfiguration() {
    const authConfig: AuthConfig = {
        issuer: 'https://test.gsis.gr',
        // issuer: '/api/oauth2servergov/',
        clientId: CLIENT_ID,
        dummyClientSecret: CLIENT_PWD,
        redirectUri: 'http://localhost:4200',
        scope: 'openid profile email offline_access roles',

        // URL of the login, logout, and silent refresh endpoints
        loginUrl: 'https://test.gsis.gr/oauth2servergov/oauth/authorize',
        logoutUrl: 'https://test.gsis.gr/oauth2servergov/logout',
        tokenEndpoint: 'https://test.gsis.gr/oauth2servergov/oauth/token',
        userinfoEndpoint: 'https://test.gsis.gr/oauth2servergov/userinfo?format=xml',

        oidc: true,
        responseType: 'code',
        strictDiscoveryDocumentValidation: false,
        showDebugInformation: true,  // Turn off debug mode,
        // requireHttps: false
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
