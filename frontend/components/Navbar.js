import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { useSession, signIn, signOut } from 'next-auth/react';

export default function CustomNavbar() {
  const { data: session } = useSession();

  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="/">PriceScraper</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/products">Produtos</Nav.Link>
            <Nav.Link href="/trends">Tendências</Nav.Link>
          </Nav>
          <Nav>
            {session ? (
              <>
                <Nav.Link>Bem-vindo, {session.user.name}</Nav.Link>
                <Button variant="outline-light" onClick={() => signOut()}>Sair</Button>
              </>
            ) : (
              <Button variant="outline-light" onClick={() => signIn('google')}>Entrar</Button>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}