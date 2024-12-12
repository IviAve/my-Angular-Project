import { Furniture } from './furniture';
import { User } from './user';

export interface Comment {
  
  _id: string;
  text: string;
  userId: User;
  furnitureId: Furniture;
  createdAt: string;
  updatedAt: string;
  __v: number;

  // likes: string[];
}