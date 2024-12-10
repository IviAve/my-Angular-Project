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

@Component({
  selector: 'app-edit-furniture',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './edit-furniture.component.html',
  styleUrls: ['./edit-furniture.component.css'],
})
export class EditFurnitureComponent implements OnInit {
  furniture: Furniture | null = null;

  constructor(
    private apiService: ApiService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const furnitureId = this.route.snapshot.params['furnitureId'];

    // Зареждаме данните на мебелта за редактиране
    this.apiService.getSingleFurniture(furnitureId).subscribe((furniture: Furniture) => {
      this.furniture = furniture;
    });
  }

  editFurniture(form: NgForm) {
    if (form.invalid) {
      console.error('Form is invalid');
      return;
    }

    const { category, condition, delivery, location, phone, imageUrl, summary } = form.value;

    const updatedFurniture = { ...this.furniture, category, condition, delivery, location, phone, imageUrl, summary };

    // Актуализираме мебелта чрез API
    this.apiService.updateFurniture(this.furniture?._id, updatedFurniture).subscribe(() => {
      this.router.navigate(['/catalog-furniture']); // Пренасочваме към каталога след успешна редакция
      form.reset(); // Нулираме формата
    });
  }
}

