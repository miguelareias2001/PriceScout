import { Container } from 'react-bootstrap';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

export default function Trends() {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === 'loading') return <div>Carregando...</div>;
  if (status === 'unauthenticated') {
    router.push('/login');
    return null;
  }

  return (
    <Container className="my-5">
      <h1>Tendências de Preços</h1>
      <p>Em desenvolvimento: Aqui poderá ver gráficos e análises de tendências de preços.</p>
    </Container>
  );
}