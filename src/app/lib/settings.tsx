export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

export interface Geo {
  lat: string;
  lng: string;
}

export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

export const getAppSettings = (): Promise<{
  theme: string;
  language: string;
}> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        theme: 'light',
        language: 'en',
      });
    }, 3000);
  });
};

export const getUserInfo = (): Promise<{
  name: string;
  email: string;
  age: number;
}> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        name: 'Gustavinho',
        email: 'gustavinho@exemplo.com',
        age: 29,
      });
    }, 3000);
  });
};

export async function getUserById(id: string): Promise<User> {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  const user = await response.json();
  return user;
}
