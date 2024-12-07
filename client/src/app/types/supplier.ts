
import { User } from './user';

export interface Supplier {
  
  _id: string;
  userId: User;
  name: string;
  imageUrl: string;
  location: string;
  model: string;
  phone: number;
  capacity: string;
  summary: string;
  created_at: string;
  updatedAt: string;
  __v: number;
}
