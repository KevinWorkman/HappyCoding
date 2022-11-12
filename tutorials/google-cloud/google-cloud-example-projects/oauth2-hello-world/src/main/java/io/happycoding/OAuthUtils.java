package io.happycoding;

import com.google.api.client.auth.oauth2.Credential;
import com.google.api.client.googleapis.auth.oauth2.GoogleAuthorizationCodeFlow;
import com.google.api.client.http.GenericUrl;
import com.google.api.client.http.HttpTransport;
import com.google.api.client.http.javanet.NetHttpTransport;
import com.google.api.client.json.JsonFactory;
import com.google.api.client.json.jackson2.JacksonFactory;
import com.google.api.client.util.store.MemoryDataStoreFactory;
import com.google.api.services.oauth2.Oauth2;
import com.google.api.services.oauth2.model.Userinfo;
import java.io.IOException;
import java.util.Arrays;
import java.util.List;

public class OAuthUtils {

  /* Sends requests to Google's OAuth 2.0 server. */   
  private static final HttpTransport HTTP_TRANSPORT = new NetHttpTransport();  
  
  public static GoogleAuthorizationCodeFlow newFlow() throws IOException {
    final String oauthClientId = System.getenv("OAUTH_CLIENT_ID");
    final String oauthClientSecret = System.getenv("OAUTH_CLIENT_SECRET");
      
    List<String> scopes = Arrays.asList(
        "https://www.googleapis.com/auth/userinfo.profile",
        "https://www.googleapis.com/auth/userinfo.email");
    return new GoogleAuthorizationCodeFlow.Builder(
            HTTP_TRANSPORT, JacksonFactory.getDefaultInstance(), oauthClientId, oauthClientSecret, scopes)
        .setDataStoreFactory(MemoryDataStoreFactory.getDefaultInstance())
        .build();
  }
  
  public static boolean isUserLoggedIn(String sessionId) {
    try{
      Credential credential = newFlow().loadCredential(sessionId);
	    return credential != null;
    } catch(IOException e){
      // Error getting login status
      return false;
    }
  }

  public static Userinfo getUserInfo(String sessionId) throws IOException {
    String appName = System.getenv("APP_NAME");
    Credential credential = newFlow().loadCredential(sessionId);
    Oauth2 oauth2Client =
        new Oauth2.Builder(HTTP_TRANSPORT, JacksonFactory.getDefaultInstance(), credential)
            .setApplicationName(appName)
            .build();

    Userinfo userInfo = oauth2Client.userinfo().get().execute();
    return userInfo;
  }
}