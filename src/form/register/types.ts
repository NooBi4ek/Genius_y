export interface RegisterFormValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export enum RegisterFields {
  firstName = 'firstName',
  lastName = 'lastName',
  email = 'email',
  password = 'password',
}
