import { Form, Button, Row, Col } from 'react-bootstrap';

export default function Filters({ filters, setFilters, onApply }) {
  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  return (
    <Form className="mb-4 p-3 bg-light rounded shadow-sm">
      <Row>
        <Col md={3}>
          <Form.Group>
            <Form.Label>Website</Form.Label>
            <Form.Select name="website" value={filters.website} onChange={handleChange}>
              <option value="">Todos</option>
              <option value="worten">Worten</option>
              <option value="pcdiga">PCDiga</option>
              <option value="pccomponentes">PCComponentes</option>
            </Form.Select>
          </Form.Group>
        </Col>
        <Col md={2}>
          <Form.Group>
            <Form.Label>Preço Mín.</Form.Label>
            <Form.Control type="number" name="minPrice" value={filters.minPrice} onChange={handleChange} />
          </Form.Group>
        </Col>
        <Col md={2}>
          <Form.Group>
            <Form.Label>Preço Máx.</Form.Label>
            <Form.Control type="number" name="maxPrice" value={filters.maxPrice} onChange={handleChange} />
          </Form.Group>
        </Col>
        <Col md={3}>
          <Form.Group>
            <Form.Label>Categoria</Form.Label>
            <Form.Control type="text" name="category" value={filters.category} onChange={handleChange} />
          </Form.Group>
        </Col>
        <Col md={2} className="d-flex align-items-end">
          <Button variant="primary" onClick={onApply}>Aplicar</Button>
        </Col>
      </Row>
    </Form>
  );
}