import { useEffect, useState } from 'react';

export default function Home() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('/api/products')
            .then(res => res.json())
            .then(data => setProducts(data))
            .catch(err => console.error('Erro ao buscar produtos:', err));
    }, []);

    return (
        <div className="d-flex flex-column min-vh-100">
            {/* Header */}
            <header className="bg-white shadow py-4">
                <div className="container">
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                            <h1 className="h3 fw-bold text-dark mb-0">PriceScout</h1>
                        </div>
                        <p className="text-secondary mb-0">Monitorando preços em tempo real</p>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="container py-4 flex-grow-1">
                <h2 className="h4 fw-semibold text-secondary mb-4">Produtos Monitorados</h2>
                {products.length === 0 ? (
                    <div className="text-center py-5">
                        <p className="text-secondary fs-5">Carregando produtos...</p>
                    </div>
                ) : (
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4">
                        {products.map(product => (
                            <div key={product.id} className="col">
                                <div className="card product-card h-100 p-3">
                                    <div className="card-body">
                                        <h3 className="h5 fw-semibold mb-2">{product.title}</h3>
                                        <p className="text-secondary mb-2">{product.description}</p>
                                        <div className="d-flex align-items-center mb-3">
                                            <span className="text-warning me-1">★</span>
                                            <span className="text-secondary">
                                                {product.rating}/5 ({product.reviews} avaliações)
                                            </span>
                                        </div>
                                        <p className="h4 fw-bold text-success mb-3">{product.price}</p>
                                        <a
                                            href={product.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn btn-primary"
                                        >
                                            Ver Produto
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </main>

            {/* Footer */}
            <footer className="bg-dark text-white p-3 text-center">
                <p className="mb-0">&copy; 2025 PriceScout. Todos os direitos reservados.</p>
            </footer>
        </div>
    );
}