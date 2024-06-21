import React, { useState, useEffect } from 'react';
import { Container, Card, Button } from 'react-bootstrap';

interface Product {
    id: string;
    price: string;
    productName: string;
    productDescription: string;
    imageUrl: string;
}

const Shop: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        const storedProducts: Product[] = JSON.parse(localStorage.getItem('products') || '[]');
        setProducts(storedProducts);
    }, []);

    const addProductToShop = (product: Product) => {
        const updatedProducts = [...products, product];
        setProducts(updatedProducts);
    };

    return (
        <Container>
            <h2>Магазин товаров</h2>
            <div className="row">
                {products.map((product, index) => (
                    <div className="col-lg-4 col-md-6 mb-4" key={index}>
                        <Card>
                            <Card.Body>
                                <Card.Title>{product.productName}</Card.Title>
                                <Card.Text>Цена: {product.price}</Card.Text>
                                <Card.Text>ID: {product.id}</Card.Text>
                                <Card.Text>Описание: {product.productDescription}</Card.Text>
                                <Card.Text>
                                    <img src={product.imageUrl} alt={product.productName} style={{ maxWidth: '100%', height: 'auto' }} />
                                </Card.Text>
                            
                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </div>
        </Container>
    );
};

export default Shop;
