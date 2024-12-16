import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { Furniture } from '../../types/furniture';
import { LoaderComponent } from '../../shared/loader/loader.component';
import { RouterLink } from '@angular/router';
import { SlicePipe } from '../../shared/pipes/slice.pipe';
import { ElapsedTimePipe } from '../../shared/pipes/elapsed-time.pipe';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-catalog-furniture',
  standalone: true,
  imports: [LoaderComponent, RouterLink, SlicePipe, DatePipe,ElapsedTimePipe],
  templateUrl: './catalog-furniture.component.html',
  styleUrl: './catalog-furniture.component.css',
})
export class CatalogFurnitureComponent implements OnInit {
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
