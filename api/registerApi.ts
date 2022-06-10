import {URL} from '../constants';
import axios, {AxiosResponse} from 'axios';
import {RegisterResponse, FormData} from '../types/type';

export async function registerApi(data?: any) {
  console.log('data registerApi', data.payload);
  const a = await axios
    .post(`${URL}/auth/sign-up`, data.payload)
    .then((response: AxiosResponse<RegisterResponse>) => response.data);

  console.log('a', a);
  return a;
}
