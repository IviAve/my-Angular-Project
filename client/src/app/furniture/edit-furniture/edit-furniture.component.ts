// import { Component } from '@angular/core';
// import { RouterLink } from '@angular/router';
// import { ApiService } from '../../api.service';

// @Component({
//   selector: 'app-edit-furniture',
//   standalone: true,
//   imports: [RouterLink],
//   templateUrl: './edit-furniture.component.html',
//   styleUrl: './edit-furniture.component.css'
// })
// export class EditFurnitureComponent {
//   constructor(private apiService: ApiService) {}
// }

import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { FormsModule, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Furniture } from '../../types/furniture';
import { UserService } from '../../user/user.service';

@Component({
  selector: 'app-edit-furniture',
  standalone: true,
  imports: [FormsModule,],
  templateUrl: './edit-furniture.component.html',
  styleUrl: './edit-furniture.component.css',
})
export class EditFurnitureComponent implements OnInit {
  furniture: Furniture | null = null;

  constructor(
    private apiService: ApiService,
    private router: Router,
    private userService: UserService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const furnitureId = this.route.snapshot.params['furnitureId'];
    console.log('furniture from client ID:', furnitureId);
    // Зареждаме данните на мебелта за редактиране
    if (furnitureId) {
      this.apiService.getSingleFurniture(furnitureId).subscribe((furniture: Furniture) => {
        this.furniture = furniture;
        console.log('Furniture data:', this.furniture);  // Проверете дали мебелта се зарежда
      });
    } else {
      console.error('Furniture ID not found');
    }
  
  }

  editFurniture(form: NgForm) {
    if (form.invalid) {
      console.error('Form is invalid');
      return;
    }
  
    const { category, condition, delivery, location, phone, imageUrl, summary } = form.value;
  
    if (!this.furniture?._id) {
      console.error('Furniture ID is missing');
      return;
    }
  
    // Създайте обект с актуализираните данни, като запазите стойностите на неактуализираните полета.
    const updatedFurniture: Furniture = {
      _id: this.furniture._id, // Оставете съществуващото _id
      userId: this.furniture.userId, // Запазете съществуващия userId
      owner: this.furniture.owner, // Запазете съществуващия owner
      subscribers: this.furniture.subscribers || [], // Запазете subscribers или задайте празен масив
      createdAt: this.furniture.createdAt, // Запазете съществуващото created_at
      updatedAt: new Date().toISOString(), // Актуализирайте updatedAt с новата дата
      __v: this.furniture.__v, // Запазете съществуващото __v
      category,
      condition,
      delivery,
      location,
      phone,
      imageUrl,
      summary
    };
  
    // Актуализираме мебелта чрез API
    this.apiService.updateFurniture(this.furniture._id, updatedFurniture).subscribe({
      next: () => {
        this.router.navigate(['/catalog-furniture']); // Пренасочваме към каталога след успешна редакция
        form.reset(); // Нулираме формата
      },
      error: (err) => {
        console.error('Error updating furniture:', err);
      }
    });
  }
  
  
  
}

