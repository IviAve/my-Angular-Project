import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

// import { ProfileComponent } from './app/user/profile/profile.component';



// bootstrapApplication(ProfileComponent).catch((err) => console.error(err));


bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
