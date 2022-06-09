export type FormData = {
  name: string;
  password: string;
  email: string;
};

export type RootStackParamList = {
  Welcome: undefined;
  Auth: undefined;
};

export type Column = {
  title: string;
  description: string | null;
  id: number;
};

export type RegisterResponse = {
  email: string;
  name: string;
  password: string;
  token: string;
  columns: [Column];
  id: number;
};

export type UserInitialState = FormData & {error: null | string};
