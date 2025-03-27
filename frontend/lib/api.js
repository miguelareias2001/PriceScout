import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

export async function fetchProducts(filters) {
    const params = new URLSearchParams(filters).toString();
    const response = await axios.get(`${API_URL}/products?${params}`, {
        headers: { Authorization: `Bearer ${sessionStorage.getItem('token')}` },
    });
    return response.data;
}

export async function fetchProductById(id) {
    const response = await axios.get(`${API_URL}/products/${id}`, {
        headers: { Authorization: `Bearer ${sessionStorage.getItem('token')}` },
    });
    return response.data;
}