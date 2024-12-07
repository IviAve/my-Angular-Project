
import { User } from './user';

export interface Furniture {
  subscribers: string[];
  
  _id: string;
  category: string; // Required, at least 5 characters
  condition: string; // Required, at least 5 characters
  delivery: string; // Required, at least 5 characters
  location: string; // Required, at least 5 characters
  phone: string; // Required, must contain only digits and be at least 5 digits long
  imageUrl: string; // Required, must be a valid image URL format
  summary: string; 
  userId: User;
  created_at: string;
  updatedAt: string;
  __v: number;
}
