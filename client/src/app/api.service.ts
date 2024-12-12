import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Comment } from './types/comments';
import { Furniture } from './types/furniture';
import { Transport } from './types/transport';

@Injectable({
  providedIn: 'root',
})

export class ApiService {
  constructor(private http: HttpClient) {}

  // getLastThreeFurnitures(limit?: number){
  //   // todo;
  //   let url = `/api/furnitures`;
  //   if(limit){
  //     url += `?limit=${limit}`;
  //   }
    
  // }

  getLastThreeFurnitures(limit?: number ): Observable<Furniture[]> {
    let url = `/api/furnitures`;
    if (limit) {
      url += `?limit=${limit}`; // Append the limit query parameter
    }

    return this.http.get<Furniture[]>(url); // Return the observable of Furniture[]
  }


  getComments(limit?: number) {
    let url = `/api/comments`;
    if (limit) {
      url += `?limit=${limit}`;
    }

    return this.http.get<Comment[]>(url);
  }
  getFurnitures() {
    return this.http.get<Furniture[]>(`/api/furnitures`);
  }

  getSingleFurniture(furnitureId: string) {
    return this.http.get<Furniture>(`/api/furnitures/${furnitureId}`);
  }

  createFurniture(category: string, condition: string, delivery: string, location: string, phone: string, imageUrl: string, summary: string) {
    const payload = { category, condition, delivery, location, phone, imageUrl, summary };
    return this.http.post<Furniture>(`/api/furnitures`, payload);
  }

  
  updateFurniture(furnitureId: string, updatedFurniture: Furniture): Observable<Furniture> {
    
    console.log(`Requesting furniture: /api/furnitures/${furnitureId}`);

    return this.http.put<Furniture>(`/api/furnitures/${furnitureId}`, updatedFurniture);
  }
  
  



    //delete -> http.delete furniture ID

    deleteFurniture(furnitureId: string) {
      return this.http.delete(`/api/furnitures/${furnitureId}`);
    }


    // transport

    // getTransports() {
    //   return this.http.get<Furniture[]>(`/api/transports`);
    // }
  
    // getSingleTransport(furnitureId: string) {
    //   return this.http.get<Furniture>(`/api/transports/${transportId}`);
    // }
  
    // createTransport(category: string, condition: string, delivery: string, location: string, phone: string, imageUrl: string, summary: string) {
    //   const payload = { category, condition, delivery, location, phone, imageUrl, summary };
    //   return this.http.post<Transport>(`/api/transportes`, payload);
    // }
  
    
    // updateTransport(furnitureId: string, updatedFurniture: Transport): Observable<Transport> {
      
    //   console.log(`Requesting transport: /api/transports/${transportId}`);
  
    //   return this.http.put<Furniture>(`/api/transports/${transportId}`, updatedTransport);
    // }
    
    
  
  
  
    //   //delete -> http.delete transport ID
  
    //   deleteTransport(furnitureId: string) {
    //     return this.http.delete(`/api/transports/${transportId}`);
    //   }

    
   
  }



  
  

 
  
  
 
