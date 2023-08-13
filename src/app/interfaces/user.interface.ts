interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
}

export interface User {
  id?: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
}

export interface logInUser {
  username: string;
  password: string;
}
