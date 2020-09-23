import axios from 'axios';
import { Produto } from '../models';

const LOCAL_URL = 'http://localhost:8080/api';

export const getProdutos = (): Promise<Produto[]> => {
    return axios.get<Produto[]>(`${LOCAL_URL}/produtos`)
        .then(res => res.data)
        .catch(err => err);
}