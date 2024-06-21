// ProductDetailsModal.tsx

import React from 'react';
import { Modal, Carousel, Button } from 'react-bootstrap';
import { Product } from './interfaces'; // Adjust path as needed

interface Props {
    show: boolean;
    onHide: () => void;
    product: Product | null;
}

const ProductDetailsModal: React.FC<Props> = ({ show, onHide, product }) => {
    if (!product) return null;

    return (
        <Modal show={show} onHide={onHide} size="lg">
            <Modal.Header closeButton>
                <Modal.Title>{product.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={product.imgUrl}
                            alt={product.name}
                        />
                    </Carousel.Item>
                    {product.additionalImages.map((img, idx) => (
                        <Carousel.Item key={idx}>
                            <img
                                className="d-block w-100"
                                src={img}
                                alt={`Slide ${idx + 2}`}
                            />
                        </Carousel.Item>
                    ))}
                </Carousel>
                <p>{product.details}</p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>
                    Закрыть
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ProductDetailsModal;
