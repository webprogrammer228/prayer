import {URL} from '../constants';
import axios from 'axios';
import {FormData} from '../types/type';

export async function registerApi(data?: FormData) {
  return await axios.post(`${URL}/auth/sign-up`, data);
}
