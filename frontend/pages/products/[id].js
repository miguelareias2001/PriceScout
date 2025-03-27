import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import { fetchProductById } from '../../lib/api';
import LoadingSpinner from '../../components/LoadingSpinner';
import { useSession } from 'next-auth/react';

export default function ProductDetail() {
  const router = useRouter();
  const { id } = router.query;
  const { data: session, status } = useSession();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login');
    } else if (id) {
      loadProduct();
    }
  }, [id, status]);

  const loadProduct = async () => {
    setLoading(true);
    try {
      const data = await fetchProductById(id);
      setProduct(data);
      setError(null);
    } catch (err) {
      setError('Erro ao carregar o produto.');
    } finally {
      setLoading(false);
    }
  };

  if (status === 'loading' || loading) return <LoadingSpinner />;
  if (!session) return null;

  return (
    <Container className="my-5">
      {error ? (
        <div className="alert alert-danger">{error}</div>
      ) : product ? (
        <Card>
          <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{product.website}</Card.Subtitle>
            <Card.Text>
              Preço: {product.price} €<br />
              Categoria: {product.category || 'N/A'}<br />
              Stock: {product.stock ? 'Sim' : 'Não'}<br />
              URL: <a href={product.url} target="_blank" rel="noopener noreferrer">{product.url}</a><br />
              Última Atualização: {new Date(product.scraped_at).toLocaleString()}
            </Card.Text>
            <Button variant="primary" onClick={() => router.back()}>Voltar</Button>
          </Card.Body>
        </Card>
      ) : (
        <p>Produto não encontrado.</p>
      )}
    </Container>
  );
}