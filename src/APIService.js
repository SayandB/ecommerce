import axios from 'axios';
const API_URL = 'http://http://10.177.7.128:8080';
export class APIService{
getProducts() {
    const url = `/inventory/getProducts?index=0&size=10`;
    return axios.get(url).then(response => response.data);
}

}
