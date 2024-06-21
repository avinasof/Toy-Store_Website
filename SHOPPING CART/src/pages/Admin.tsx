import React, { useState, useEffect } from 'react';
import { Modal, Button, Form, Alert, Card } from 'react-bootstrap';

interface Product {
    id: string;
    price: string;
    productName: string;
    productDescription: string;
    imageUrl: string;
}

const Admin: React.FC = () => {
    const [showAddForm, setShowAddForm] = useState(false);
    const [id, setId] = useState('');
    const [price, setPrice] = useState('');
    const [productName, setProductName] = useState('');
    const [productDescription, setProductDescription] = useState('');
    const [imageFile, setImageFile] = useState<File | null>(null);
    const [addError, setAddError] = useState<string | null>(null);
    const [deleteError, setDeleteError] = useState<string | null>(null);
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        const storedProducts: Product[] = JSON.parse(localStorage.getItem('products') || '[]');
        setProducts(storedProducts);
    }, []);

    const toggleAddForm = () => {
        setShowAddForm(!showAddForm);
    };

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            setImageFile(event.target.files[0]);
        }
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!imageFile) {
            setAddError('Пожалуйста, выберите изображение.');
            return;
        }

        const reader = new FileReader();
        reader.onloadend = () => {
            const newProduct: Product = {
                id,
                price,
                productName,
                productDescription,
                imageUrl: reader.result as string
            };

            if (products.some(product => product.id === id)) {
                setAddError(`Товар с ID ${id} уже существует.`);
                return;
            }

            addProduct(newProduct);

            setId('');
            setPrice('');
            setProductName('');
            setProductDescription('');
            setImageFile(null);
            setShowAddForm(false);
            setAddError(null);
        };
        reader.readAsDataURL(imageFile);
    };

    const addProduct = (product: Product) => {
        const storedProducts: Product[] = JSON.parse(localStorage.getItem('products') || '[]');

        if (storedProducts.some(p => p.id === product.id)) {
            setAddError(`Товар с ID ${product.id} уже существует.`);
            return;
        }

        const updatedProducts: Product[] = [...storedProducts, product];
        localStorage.setItem('products', JSON.stringify(updatedProducts));
        setProducts(updatedProducts);

        setAddError(null);
    };

    const handleDelete = (productName: string) => {
        const storedProducts: Product[] = JSON.parse(localStorage.getItem('products') || '[]');
        const updatedProducts = storedProducts.filter(product => product.productName !== productName);

        if (updatedProducts.length === storedProducts.length) {
            setDeleteError(`Товар с названием "${productName}" не найден.`);
        } else {
            localStorage.setItem('products', JSON.stringify(updatedProducts));
            setProducts(updatedProducts);
            setDeleteError(null);
        }
    };

    return (
        <div>
            <h2>Admin Page</h2>
            <Button variant="primary" onClick={toggleAddForm}>Добавить товар</Button>

            <Modal show={showAddForm} onHide={toggleAddForm} size="lg" centered>
                <Modal.Header closeButton>
                    <Modal.Title>Добавить товар</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formId">
                            <Form.Label>ID</Form.Label>
                            <Form.Control type="text" value={id} onChange={(e) => setId(e.target.value)} required />
                        </Form.Group>
                        <Form.Group controlId="formPrice">
                            <Form.Label>Цена</Form.Label>
                            <Form.Control type="text" value={price} onChange={(e) => setPrice(e.target.value)} required />
                        </Form.Group>
                        <Form.Group controlId="formProductName">
                            <Form.Label>Название товара</Form.Label>
                            <Form.Control type="text" value={productName} onChange={(e) => setProductName(e.target.value)} required />
                        </Form.Group>
                        <Form.Group controlId="formProductDescription">
                            <Form.Label>Описание товара</Form.Label>
                            <Form.Control type="text" value={productDescription} onChange={(e) => setProductDescription(e.target.value)} required />
                        </Form.Group>
                        <Form.Group controlId="formImage">
                            <Form.Label>Изображение</Form.Label>
                            <Form.Control type="file" onChange={handleImageChange} required />
                        </Form.Group>
                        {addError && <Alert variant="danger">{addError}</Alert>}
                        <Button variant="primary" type="submit">Добавить</Button>
                    </Form>
                </Modal.Body>
            </Modal>

            <h3>Товары</h3>
            <div className="product-list">
                {products.map(product => (
                    <Card key={product.id} style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={product.imageUrl} />
                        <Card.Body>
                            <Card.Title>{product.productName}</Card.Title>
                            <Card.Text>
                                {product.productDescription}
                                <br />
                                Цена: {product.price}
                            </Card.Text>
                            <Button variant="danger" onClick={() => handleDelete(product.productName)}>Удалить</Button>
                        </Card.Body>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default Admin;
