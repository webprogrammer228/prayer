import {URL} from '../constants';
import axios from 'axios';
import {AuthType} from '../types/type';

export async function signInApi(data?: AuthType) {
  return await axios.post(`${URL}/auth/sign-in`, data);
}
