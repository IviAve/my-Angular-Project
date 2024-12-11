import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink, Router } from '@angular/router';
import { ApiService } from '../../api.service';
import { Furniture } from '../../types/furniture';
import { UserService } from '../../user/user.service';
import { HomeComponent } from '../../home/home.component';
import { UserForAuth } from '../../types/user';

@Component({
  selector: 'app-details-furniture',
  standalone: true,
  imports: [HomeComponent,RouterLink],
  templateUrl: './details-furniture.component.html',
  styleUrl: './details-furniture.component.css',
})
export class DetailsFurnitureComponent implements OnInit {
  furniture = {} as Furniture;
  user = {} as UserForAuth;
  isOwner: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    private userService: UserService,
    private router: Router
  ) {}

  get isLoggedIn(): boolean {
    return this.userService.isLogged;
  }
  get getFurnitureId(): string {
    return this.route.snapshot.params['furnitureId'];
  }

  get username(): string {
    return this.userService.user?.username || '';
  }



ngOnInit(): void {
  const furnitureId = this.route.snapshot.params['furnitureId'];

  this.apiService.getSingleFurniture(furnitureId).subscribe((furniture) => {
    this.furniture = furniture;
    console.log('Furniture data:', this.furniture); // Логване на данните за мебелта

    // Проверка за наличието на userId
    if (this.furniture && this.furniture.userId) {
      console.log('Furniture userId:', this.furniture.userId);
    } else {
      console.log('Furniture or userId is not available');
    }

    if (this.userService.isLogged && this.userService.user?._id) {
      // Проверка дали текущият потребител е собственик
      this.isOwner = this.furniture.userId._id === this.userService.user._id;
      console.log('Is owner:', this.isOwner); // Логване на резултата от проверката
    }
  });
}



  delete(): void {
    const confirmDelete = confirm('Are you sure you want to delete this furniture?');
    if (!confirmDelete) return;
  
    const furnitureId = this.getFurnitureId;
  
    this.apiService.deleteFurniture(furnitureId).subscribe({
      next: () => {
        alert('Furniture deleted successfully!');
        this.router.navigate(['/catalog-furniture']);
      },
      error: (err) => {
        console.error('Error deleting furniture:', err);
        alert('Failed to delete furniture. Please try again later.');
      }
    });
  }
  
  
  
  }
