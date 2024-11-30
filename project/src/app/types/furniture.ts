
import { User } from './user';

export interface Theme {
  category: string;
  _id: string;
  condition: string;
  delivery: string;
  location: string;
  phone: number;
  imageUrl: string;
  userId: User;
  created_at: string;
  updatedAt: string;
  __v: number;
}
