

import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { Transport } from '../../types/transport';
import { LoaderComponent } from '../../shared/loader/loader.component';
import { RouterLink } from '@angular/router';
import { SlicePipe } from '../../shared/pipes/slice.pipe';
import { ElapsedTimePipe } from '../../shared/pipes/elapsed-time.pipe';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-catalog-transport',
  standalone: true,
  imports: [LoaderComponent, RouterLink, SlicePipe, DatePipe],
  templateUrl: './catalog-transport.component.html',
  styleUrl: './catalog-transport.component.css'
})

export class CatalogTransportComponent implements OnInit {
  transports: Transport[] = [];
  isLoading = true;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getTransports().subscribe((transports) => {
      this.transports = transports;
      this.isLoading = false;
    });
  }
}