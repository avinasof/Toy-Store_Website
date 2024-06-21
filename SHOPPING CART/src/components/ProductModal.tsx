import { Modal, Button, Image, Row, Col } from "react-bootstrap";

type ProductModalProps = {
    show: boolean;
    onHide: () => void;
    product: any;
};

export function ProductModal({ show, onHide, product }: ProductModalProps) {
    if (!product) return null;

    return (
        <Modal show={show} onHide={onHide} centered>
            <Modal.Header closeButton>
                <Modal.Title>{product?.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Row>
                    <Col md={6} className="d-flex justify-content-center align-items-center">
                        <Image src={product?.image} fluid rounded />
                    </Col>
                    <Col md={6}>
                        <h4 className="text-primary">{product?.price} USD</h4>
                        <p className="mt-3"><strong>Описание:</strong></p>
                        <p>{product?.description}</p>
                        {/* Add more product information here */}
                    </Col>
                </Row>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>
                    Закрыть
                </Button>
            </Modal.Footer>
        </Modal>
    );
}
