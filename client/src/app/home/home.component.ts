import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UserService } from '../user/user.service';
import { LoaderComponent } from '../shared/loader/loader.component';
import { CatalogFurnitureComponent } from '../furniture/catalog-furniture/catalog-furniture.component';
import { Furniture } from '../types/furniture';
import { ApiService } from '../api.service';





@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, LoaderComponent,CatalogFurnitureComponent ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  // get isLoggedIn(): boolean {
  //   return this.userService.isLogged;
  // }

  furnitures: Furniture[] = [];
  isLoading = true;
  constructor(private apiService: ApiService) {}

  

  ngOnInit() {
    this.apiService.getFurnitures().subscribe((furnitures) => {
      this.furnitures = furnitures;
      this.isLoading = false;
    });
  }
  
}
