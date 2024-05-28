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
