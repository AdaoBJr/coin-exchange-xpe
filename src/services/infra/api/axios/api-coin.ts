import axios from 'axios';
import { publicEnv } from 'environment';

export const apiCoin = axios.create({
  baseURL: publicEnv.URL_API_COIN,
});
