import { Component ,OnInit} from '@angular/core';
import { RouterLink } from '@angular/router';
import { UserService } from '../user/user.service';
import { LoaderComponent } from '../shared/loader/loader.component';
import { CatalogFurnitureComponent } from '../furniture/catalog-furniture/catalog-furniture.component';
import { Furniture } from '../types/furniture';
import { ApiService } from '../api.service';
import { ElapsedTimePipe } from '../shared/pipes/elapsed-time.pipe';


import { trigger, transition, style, animate, keyframes } from '@angular/animations'; 



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, LoaderComponent,CatalogFurnitureComponent ,ElapsedTimePipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',

  animations: [
    trigger('typing', [
      transition(':enter', [
        animate('4s steps(30)', style({ width: '100%' })) // Изписване на текста
      ])
    ])
  ]
})
export class HomeComponent  implements OnInit{
  // get isLoggedIn(): boolean {
  //   return this.userService.isLogged;
  // }

  furnitures: Furniture[] = [];
  isLoading = true;
  constructor(private apiService: ApiService) {}

  

  // ngOnInit() {
  //   this.apiService.getFurnitures().subscribe((furnitures) => {
  //     this.furnitures = furnitures;
  //     this.isLoading = false;
  //   });
  // }

  ngOnInit() : void {
    this.apiService.getLastThreeFurnitures(3).subscribe((furnitures) => {
      this.furnitures = furnitures;
      this.isLoading = false;
    });
  }
  
}
