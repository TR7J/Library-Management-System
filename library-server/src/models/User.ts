export interface IUser {
  type: "ADMIN" | "USER" | "PATRON";
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}
