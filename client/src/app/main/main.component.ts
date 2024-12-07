import { Component } from '@angular/core';

import { CatalogFurnitureComponent } from '../furniture/catalog-furniture/catalog-furniture.component';
import { UserService } from '../user/user.service';
import { HomeComponent } from '../home/home.component';
import { AddFurnitureComponent } from '../furniture/add-furniture/add-furniture.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CatalogFurnitureComponent,AddFurnitureComponent, HomeComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent {
  get isLoggedIn(): boolean {
    return this.userService.isLogged;
  }

  constructor(private userService: UserService) {}
}
