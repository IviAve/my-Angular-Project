import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Furniture } from './types/furniture';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getThreeFurnitures(){
    // todo;
  }

  getFurnitures() {
    return this.http.get<Furniture[]>(`/api/furnitures`);
  }

  getSingleFurniture(id: string) {
    return this.http.get<Furniture>(`/api/furnitures/${id}`);
  }

  createFurniture(category: string, condition: string, delivery: string, location: string, phone: string, imageUrl: string, summary: string) {
    const payload = { category, condition, delivery, location, phone, imageUrl, summary };
    return this.http.post<Furniture>(`/api/furnitures`, payload);
  }

  // CRUD operations
  // update -> http.put
  updateFurniture(furnitureId: string, category: string, condition: string, delivery: string, location: string, phone: string, imageUrl: string, summary: string) {
    const payload = { category, condition, delivery, location, phone, imageUrl, summary };
    return this.http.put<Furniture>(`/api/furnitures/${furnitureId}`, payload);
   }


    //delete -> http.delete furniture ID

    deleteFurniture(furnitureId: string) {
      return this.http.delete(`/api/furnitures/${furnitureId}`);
    }
    // 


    
   
  }


  
  

 
  
  
 
