export type FormData = {
  name: string;
  password: string;
  email: string;
};

export type AuthType = Omit<FormData, 'name'>;

export type RootStackParamList = {
  Welcome: undefined;
  Auth: undefined;
  MyDesk: undefined;
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

export type AuthResponse = Omit<FormData, 'password'> & {id: number} & {
  token: string;
};

export type AuthError = {
  message: string;
  error: string;
};

export type RegisterResponseError = {
  code: string;
  constraint: string;
  detail: string;
  file: string;
  length: number;
  line: string;
  message: string;
  name: string;
  parameters: string[];
  query: string;
  routine: string;
  schema: string;
  severity: string;
  table: string;
};

export type UserInitialState = {
  data: FormData;
  isLoading: boolean;
  isAuth: boolean;
  error: null | string;
};

export type ColumnsInitialState = Col[];

export type Col = {
  id: number | null;
  title: string;
  description: string | null;
  userId: number | null;
  error?: null;
};
