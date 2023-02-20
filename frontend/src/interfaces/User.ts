export interface IUser {
  _id?: string;
  name?: string;
  email?: string;
  username?: string;
  password?: string;
}

export interface IUserLoggedIn {
  isLoggedIn: boolean;
  user: IUser;
}
