import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './error/error.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { ProfileComponent } from './user/profile/profile.component';
import { MainComponent } from './main/main.component';
import { DetailsFurnitureComponent } from './furniture/details-furniture/details-furniture.component';
import { AuthGuard } from './guards/auth.guard';
import { ErrorMsgComponent } from './core/error-msg/error-msg.component';
import { CatalogFurnitureComponent } from './furniture/catalog-furniture/catalog-furniture.component';
import { AddFurnitureComponent } from './furniture/add-furniture/add-furniture.component';
import { AboutUsComponent } from './about-us/about-us/about-us.component';
//import { AddTransportServicesComponent } from './transport-services/add-transport-services/add-transport-services.component';
import { CatalogTransportServicesComponent } from './transport-services/catalog-transport-services/catalog-transport-services.component';
import { DetailsTransportServicesComponent } from './transport-services/details-transport-services/details-transport-services.component';
import { EditTransportServicesComponent } from './transport-services/edit-transport-services/edit-transport-services.component';
import { EditFurnitureComponent } from './furniture/edit-furniture/edit-furniture.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },

  //   Start - User routing
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  //   End - User routing
{path: 'about-us', component: AboutUsComponent},
  // Start - furniture routing
  {
    path: 'furnitures',
    children: [
      { path: '', component: MainComponent },
      {
        path: ':furnitureId',
        component: DetailsFurnitureComponent,
        // canActivate: [AuthGuard],
      },
    ],
  },
 

  {path: 'catalog-furniture',component: CatalogFurnitureComponent},
  
  {
    path: 'add-furniture',
    loadComponent: () =>
      import('./furniture/add-furniture/add-furniture.component').then(
        (c) => c.AddFurnitureComponent
      ),
    canActivate: [AuthGuard],
  },
  
  { path:'edit-furniture/:furnitureId', component: EditFurnitureComponent },


  // End - furniture routing
  // {path:'add-transport-services', component: AddTransportServicesComponent},
  {path:'details-transport-services', component: DetailsTransportServicesComponent},
  {path:'catalog-transport-services', component: CatalogTransportServicesComponent},
  {path:'edit-transport-services', component: EditTransportServicesComponent},

  { path: 'error', component: ErrorMsgComponent },
  { path: '404', component: PageNotFoundComponent },
  { path: '**', redirectTo: '/404' },
];
