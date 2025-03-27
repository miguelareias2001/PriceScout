import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import Filters from '../../components/Filters';
import ProductCard from '../../components/ProductCard';
import LoadingSpinner from '../../components/LoadingSpinner';
import { fetchProducts } from '../../lib/api';

export default function Products() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({
    website: '',
    minPrice: '',
    maxPrice: '',
    category: '',
  });

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login');
    } else if (status === 'authenticated') {
      loadProducts();
    }
  }, [status]);

  const loadProducts = async () => {
    setLoading(true);
    try {
      const data = await fetchProducts(filters);
      setProducts(data);
      setError(null);
    } catch (err) {
      setError('Erro ao carregar produtos. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  const handleApplyFilters = () => {
    loadProducts();
  };

  if (status === 'loading') return <LoadingSpinner />;
  if (!session) return null;

  return (
    <Container>
      <h1 className="my-4">Lista de Produtos</h1>
      <Filters filters={filters} setFilters={setFilters} onApply={handleApplyFilters} />
      {loading ? (
        <LoadingSpinner />
      ) : error ? (
        <div className="alert alert-danger">{error}</div>
      ) : (
        <Row>
          {products.length > 0 ? (
            products.map((product) => (
              <Col md={4} key={product.id}>
                <ProductCard product={product} />
              </Col>
            ))
          ) : (
            <Col>
              <p>Nenhum produto encontrado.</p>
            </Col>
          )}
        </Row>
      )}
    </Container>
  );
}