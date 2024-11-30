export interface User {
 
  _id: string;
  tel: string;
  email: string;
  username: string;
  password: string;
  created_at: string;
  updatedAt: string;
  __v: number;
}

export interface UserForAuth {
 userName: string;
  email: string;
 
  password: string;
  id: string;
}
