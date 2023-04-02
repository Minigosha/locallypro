//TUTORIAL: https://learn.microsoft.com/en-us/azure/active-directory/develop/tutorial-v2-react

export const msalConfig = {
    auth: {
      clientId: "69e8628e-8f5a-413c-8705-904e0735eaa0",
      authority: "https://login.microsoftonline.com/locallypro.onmicrosoft.com", //"Enter_the_Cloud_Instance_Id_Here/Enter_the_Tenant_Info_Here", // This is a URL (e.g. https://login.microsoftonline.com/{your tenant ID})
      redirectUri: "http://localhost:3000",
    },
    cache: {
      cacheLocation: "sessionStorage", // This configures where your cache will be stored
      storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
    }
  };
  
  // Add scopes here for ID token to be used at Microsoft identity platform endpoints.
  export const loginRequest = {
   scopes: ["User.Read"]
  };
  
  // Add the endpoints here for Microsoft Graph API services you'd like to use.
  export const graphConfig = {
      graphMeEndpoint: "https://graph.microsoft.com/v1.0/me" //"Enter_the_Graph_Endpoint_Here/v1.0/me"
  };