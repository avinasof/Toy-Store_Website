import React, { useState } from 'react';
import { Carousel, Col, Container, Row, Card, Button, Form } from "react-bootstrap";
import recommendedItems from "../data/recommendedItems.json";
import reviews from "../data/reviews.json";
import news from "../data/news.json";
import { useTheme } from '../context/ThemeContext'; 
import ProductDetailsModal from '../data/ProductDetailsModal';
import { Product } from '../data/interfaces';


export function Home() {
    const { darkMode } = useTheme(); 
    const [showModal, setShowModal] = useState(false); 
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null); 

    
    const openModal = (product: Product) => {
        setSelectedProduct(product);
        setShowModal(true);
    };

  
    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <Container>
            <h1>Главная</h1>
            <section>
                <h2>Популярные товары</h2>
                
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="/images/cute-plush-toy-studio.jpg"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>Мы открылись!</h3>
                            <p>Первым покупателям скидки до 40%</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="/images/слайдер3.png"
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                            <h3>Качество 100%</h3>
                            <p>Сделаны в США</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="/images/слайдер4.png"
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h3>Наши партнеры</h3>
                            <p>Disney, Mattel.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </section>
            <section>
                <h2>Новости</h2>
                <Row>
                    {news.map((newsItem, idx) => (
                        <Col key={idx} md={4}>
                            <Card className={`mb-4 ${darkMode ? 'bg-dark text-white' : 'bg-light'}`}>
                                <Card.Body>
                                    <Card.Title>{newsItem.title}</Card.Title>
                                    <Card.Text>{newsItem.description}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </section>
            <section>
                <h2>Рекомендуемые товары</h2>
                <Row>
                    {recommendedItems.map((item, idx) => (
                        <Col key={idx} md={4}>
                            <Card className={`mb-4 ${darkMode ? 'bg-dark text-white' : 'bg-light'}`}>
                                <Card.Img variant="top" src={item.imgUrl} />
                                <Card.Body>
                                    <Card.Title>{item.name}</Card.Title>
                                    <Card.Text>{item.price} BYN</Card.Text>
                                    <Button
                                        variant={darkMode ? "secondary" : "light"}
                                        style={{
                                            backgroundColor: darkMode ? '' : '#FFCEEF',
                                            color: darkMode ? 'white' : 'black'
                                        }}
                                        onClick={() => openModal(item)}
                                    >
                                        Подробнее
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </section>
            <section>
                <h2>Отзывы покупателей</h2>
                <Row>
                    {reviews.map((review, idx) => (
                        <Col key={idx} md={4}>
                            <Card className={`mb-4 ${darkMode ? 'bg-dark text-white' : 'bg-light'}`}>
                                <Card.Body className="text-center">
                                    <Card.Img
                                        variant="top"
                                        src={review.imgUrl}
                                        style={{ width: "150px", height: "150px", objectFit: "cover", borderRadius: "50%", marginBottom: "10px" }}
                                    />
                                    <Card.Title>{review.name}</Card.Title>
                                    <Card.Text>{review.comment}</Card.Text>
                                    <Card.Footer>
                                        <small className="text-muted">{review.date}</small>
                                    </Card.Footer>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </section>
            <section>
                <h2>Подписка на новости</h2>
                <Form>
                    <Form.Group controlId="formEmail">
                        <Form.Label>Email адрес</Form.Label>
                        <Form.Control type="email" placeholder="Введите email" />
                    </Form.Group>
                    <Button
                        variant={darkMode ? "secondary" : "light"}
                        style={{
                            backgroundColor: darkMode ? '' : '#FFCEEF',
                            color: darkMode ? 'white' : 'black'
                        }}
                        type="submit"
                        className="mt-3"
                    >
                        Подписаться
                    </Button>
                </Form>
            </section>

            {}
            <ProductDetailsModal
                show={showModal}
                onHide={closeModal}
                product={selectedProduct}
            />
        </Container>
    );
}
