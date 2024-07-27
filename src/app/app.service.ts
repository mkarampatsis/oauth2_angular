// import { inject, Injectable } from '@angular/core';
// import { OAuthService, AuthConfig, JwksValidationHandler } from 'angular-oauth2-oidc';

// const authConfig: AuthConfig = {
//     // URL of the Identity Provider
//     issuer: 'https://test.gsis.gr/oauth2servergov',
  
//     // The SPA's id. The SPA is registered with this id at the auth-server
//     clientId: 'T4KA2K27387',
  
//     // Secret for the client, if required
//     dummyClientSecret: 'xxxxx',
  
//     // set the scope for the permissions the client should request
//     scope: 'read',
  
//     // Use silent refresh to obtain new access tokens
//     silentRefreshRedirectUri: window.location.origin + '/silent-refresh.html',
  
//     // URL of the login, logout, and silent refresh endpoints
//     loginUrl: 'https://test.gsis.gr/oauth2servergov/oauth/authorize',
//     logoutUrl: 'https://test.gsis.gr/oauth2servergov/logout',
//     tokenEndpoint: 'https://test.gsis.gr/oauth2servergov/oauth/token',
//     userinfoEndpoint: 'https://test.gsis.gr/oauth2servergov/userinfo?format=xml',
  
//     // Additional configuration options
//     oidc: true,
//     responseType: 'code',
//     showDebugInformation: false,  // Turn off debug mode
//     redirectUri: 'http://localhost:4200/',  // Replace with your actual redirect URI
//     // state: 'PEH5Nb_hpQnZpdzxdI20N'
//   };
  
//   @Injectable({
//     providedIn: 'root',
//   })
//   export class AuthService {
    
//     oauthService = inject(OAuthService)
    
//     constructor() {
//     //   this.configure();
//     }
  
//     private configure() {
//       this.oauthService.configure(authConfig);
//       this.oauthService.tokenValidationHandler = new JwksValidationHandler();
//       this.oauthService.loadDiscoveryDocumentAndTryLogin();
//     }
  
//     public login() {
//       this.oauthService.initLoginFlow();
//     }
  
//     public logout() {
//       this.oauthService.logOut();
//     }
  
//     public get identityClaims() {
//       const claims = this.oauthService.getIdentityClaims();
//       return claims ? claims : null;
//     }
  
//     public get accessToken() {
//       return this.oauthService.getAccessToken();
//     }
//   }