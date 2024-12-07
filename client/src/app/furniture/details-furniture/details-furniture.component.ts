import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../api.service';
import { Furniture } from '../../types/furniture';
import { UserService } from '../../user/user.service';
import { HomeComponent } from '../../home/home.component';

@Component({
  selector: 'app-details-furniture',
  standalone: true,
  imports: [HomeComponent],
  templateUrl: './details-furniture.component.html',
  styleUrl: './details-furniture.component.css',
})
export class DetailsFurnitureComponent implements OnInit {
  furniture = {} as Furniture;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    private userService: UserService
  ) {}

  get isLoggedIn(): boolean {
    return this.userService.isLogged;
  }

  get username(): string {
    return this.userService.user?.username || '';
  }

  ngOnInit(): void {
    const id = this.route.snapshot.params['furnitureId'];

    this.apiService.getSingleFurniture(id).subscribe((furniture) => {
      this.furniture = furniture;
    });
  }
}
