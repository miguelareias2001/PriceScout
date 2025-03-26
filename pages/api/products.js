import { getProducts } from '../../db';

export default async function handler(req, res) {
    try {
        const products = await getProducts();
        res.status(200).json(products);
    } catch (error) {
        console.error('Erro ao buscar produtos na API:', error);
        res.status(500).json({ error: 'Erro ao buscar produtos' });
    }
}