import {getToken} from '../helpers';
import axios from 'axios';
import {URL} from '../constants';
import {Column, ColumnResponse} from '../types/type';

export const getColumnsApi = async () => {
  const token = await getToken().then(token => token);
  const config = {
    headers: {
      Accept: '*',
      Authorization: `Bearer ${token}`,
    },
  };
  return await axios
    .get(`${URL}/columns`, config)
    .then(response => response.data);
};

export const createColumnApi = async (data: Column) => {
  const token = await getToken().then(token => token);
  const config = {
    headers: {
      Accept: '*',
      Authorization: `Bearer ${token}`,
    },
  };
  return await axios
    .post(`${URL}/columns`, data, config)
    .then(response => response.data);
};
