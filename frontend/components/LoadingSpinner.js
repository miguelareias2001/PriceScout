import { Spinner } from 'react-bootstrap';

export default function LoadingSpinner() {
  return (
    <div className="text-center my-5">
      <Spinner animation="border" variant="primary" />
    </div>
  );
}