import axios from 'axios';
import { getSession } from 'next-auth/react';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function fetchProducts(filters) {
    const session = await getSession();
    const token = session?.accessToken;

    try {
        const params = new URLSearchParams(filters).toString();
        const response = await axios.get(`${API_URL}/products?${params}`, {
            headers: { Authorization: `Bearer ${token}` },
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching products:', error.response?.data || error.message || 'Unknown error'); // Debugging log
        throw error;
    }
}

export async function fetchProductById(id) {
    const session = await getSession();
    const token = session?.accessToken;

    try {
        const response = await axios.get(`${API_URL}/products/${id}`, {
            headers: { Authorization: `Bearer ${token}` },
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching product by ID:', error.response?.data || error.message || 'Unknown error'); // Debugging log
        throw error;
    }
}