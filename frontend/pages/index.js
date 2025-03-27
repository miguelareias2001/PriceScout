import { Container, Row, Col, Button } from 'react-bootstrap';
import { useSession, signIn } from 'next-auth/react';
import Link from 'next/link';

export default function Home() {
  const { data: session } = useSession();

  return (
    <Container className="text-center my-5">
      <h1>Bem-vindo ao PriceScraper</h1>
      <p className="lead">Monitorize preços de produtos em tempo real e tome decisões informadas.</p>
      {session ? (
        <Link href="/products" passHref>
          <Button variant="primary" size="lg">Explorar Produtos</Button>
        </Link>
      ) : (
        <Button variant="primary" size="lg" onClick={() => signIn('google')}>Entrar com Google</Button>
      )}
    </Container>
  );
}