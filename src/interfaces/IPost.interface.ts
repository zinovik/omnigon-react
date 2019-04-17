import { IUser } from './IUser.interface';

export interface IPost {
  created_at: string,
  id: string,
  user: IUser,
}
