import { useSession, signIn } from 'next-auth/react';
import { useRouter } from 'next/router';
import { Container, Button } from 'react-bootstrap';

export default function Login() {
  const { data: session } = useSession();
  const router = useRouter();

  if (session) {
    router.push('/products');
    return null;
  }

  return (
    <Container className="text-center my-5">
      <h1>Login</h1>
      <Button variant="primary" onClick={() => signIn('google')}>
        Entrar com Google
      </Button>
    </Container>
  );
}