import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { ProfileComponent } from './user/profile/profile.component';

import { MainComponent } from './main/main.component';

import { AuthGuard } from './guards/auth.guard';
import { AddSupplierComponent } from './supplier/add-supplier/add-supplier.component';
import { CatalogSupplierComponent } from './supplier/catalog-supplier/catalog-supplier.component';
import { AboutUsComponent } from './about-us/about-us/about-us.component';
import { AddFurnitureComponent } from './furniture/add-furniture/add-furniture.component';
import { CatalogFurnitureComponent } from './furniture/catalog-furniture/catalog-furniture.component';
import { DetailsSupplierComponent } from './supplier/details-supplier/details-supplier.component';
import { DetailsFurnitureComponent } from './furniture/details-furniture/details-furniture.component';
import { EditFurnitureComponent } from './furniture/edit-furniture/edit-furniture.component';
import { EditSuplierComponent } from './supplier/edit-suplier/edit-suplier.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },

  //   Start - User routing
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' }, // test for redirect from register
  { path: '', redirectTo: 'register', pathMatch: 'full' }, // test for redirect from login
  { path: 'profile', component: ProfileComponent },

  //   End - User routing
  

  
  {path: 'about-us', component: AboutUsComponent},
  
 
 

  // {
  //   path: 'add-supplier', component: AddSupplierComponent,canActivate : [AuthGuard] 
  // },

  { path: 'catalog-supplier', component: CatalogSupplierComponent} ,  // to add authguard
  { path: 'catalog-furniture', component: CatalogFurnitureComponent} ,  // to add authguard
   { path: 'add-supplier', component: AddSupplierComponent} ,  // to add authguard
   { path: 'add-furniture', component: AddFurnitureComponent} ,  // to add authguard
   { path: 'details-supplier', component: DetailsSupplierComponent} ,  // to add authguard
   { path: 'details-furniture', component: DetailsFurnitureComponent} ,  // to add authguard
   { path: 'edit-furniture', component: EditFurnitureComponent} ,  // to add authguard
   { path: 'edit-supplier', component: EditSuplierComponent} ,  // to add authguard

   { path: 'catalog-supplier', redirectTo: 'details-supplier', pathMatch: 'full' }, //test for details for supplier
   { path: 'catalog-furniture', redirectTo: 'details-furniture', pathMatch: 'full' }, //test for details for supplier
   { path: 'details-furniture', redirectTo: 'edit-furniture', pathMatch: 'full' }, //test for details for supplier
   { path: 'details-supplier', redirectTo: 'edit-supplier', pathMatch: 'full' }, //test for details for supplier

   
  { path: '404', component: ErrorComponent },
  { path: '**', redirectTo: '/404' },
];
