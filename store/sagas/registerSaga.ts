import axios from 'axios';
import {URL} from '../../constants';

const signUp = async (data: FormData) =>
  await axios
    .post(`${URL}/auth/sign-up`, data)
    .then(response => response.data)
    .catch(e => console.log('Error', e));
