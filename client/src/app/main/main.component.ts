import { Component } from '@angular/core';

import { UserService } from '../user/user.service';
import { HomeComponent } from '../home/home.component';
import { AddSupplierComponent } from '../supplier/add-supplier/add-supplier.component';
import { AddFurnitureComponent } from '../furniture/add-furniture/add-furniture.component';
import { CatalogSupplierComponent } from '../supplier/catalog-supplier/catalog-supplier.component';
import { CatalogFurnitureComponent } from '../furniture/catalog-furniture/catalog-furniture.component';
import { AboutUsComponent } from '../about-us/about-us/about-us.component';
import { ProfileComponent } from '../user/profile/profile.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    ProfileComponent,
      HomeComponent,
      AboutUsComponent,
      AddSupplierComponent,
      AddFurnitureComponent,
  CatalogSupplierComponent,
CatalogFurnitureComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent {
  get isLoggedIn(): boolean {
    return this.userService.isLogged;
  }

  constructor(private userService: UserService) {}
}
