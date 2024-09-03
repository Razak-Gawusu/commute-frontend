export interface IUser {
  first_name: string | null;
  last_name: string | null;
  email: string | null;
  password?: string | null;
  role?: string | null;
  token?: string | null;
}

export enum Role {
  ADMIN = 'admin',
  PARENT = 'parent',
  DRIVER = 'driver',
}
