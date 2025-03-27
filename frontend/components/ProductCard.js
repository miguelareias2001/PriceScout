import { Card, Button } from 'react-bootstrap';
import Link from 'next/link';

export default function ProductCard({ product }) {
  return (
    <Card className="mb-4 shadow-sm">
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{product.website}</Card.Subtitle>
        <Card.Text>
          Preço: {product.price} €<br />
          Categoria: {product.category || 'N/A'}<br />
          Stock: {product.stock ? 'Sim' : 'Não'}
        </Card.Text>
        <Link href={`/products/${product.id}`} passHref>
          <Button variant="primary">Ver Detalhes</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}