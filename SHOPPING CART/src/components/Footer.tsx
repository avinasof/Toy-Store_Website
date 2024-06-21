// footer.tsx
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useTheme } from '../context/ThemeContext'; // Import useTheme

export function Footer() {
  const { darkMode } = useTheme();

  return (
    <footer 
    className={`py-4 footer-border-shadow ${darkMode ? 'bg-dark' : 'bg-lght'}`} 
    style={{ backgroundColor: darkMode ? '' : '#FFCEEF', color: darkMode ? '#f8f9fa' : '#212529' }}
>
    <Container>
        <Row>
            <Col md={4}>
                <img
                    src="/images/baby-toy3.png"
                    alt="Logo"
                    style={{ width: '50px', height: 'auto', marginBottom: '10px' }}
                />
                <h5>О нас</h5>
                <p>
                    Мы продаем самые лучшие товары по самым лучшим ценам.
                    Наша цель - удовлетворить каждого клиента.
                </p>
            </Col>
            <Col md={4}>
                <h5>Контакты</h5>
                <p>
                    Email: info@example.com<br />
                    Телефон: +123 456 7890
                </p>
            </Col>
            <Col md={4}>
                <h5>Подписывайтесь на нас</h5>
                <ul className="list-unstyled">
                    <li>
                        <a href="#" className={darkMode ? 'text-white' : 'text-black'}>Facebook</a>
                    </li>
                    <li>
                        <a href="#" className={darkMode ? 'text-white' : 'text-black'}>Twitter</a>
                    </li>
                    <li>
                        <a href="#" className={darkMode ? 'text-white' : 'text-black'}>Instagram</a>
                    </li>
                </ul>
            </Col>
        </Row>
        <Row className="mt-3">
            <Col className="text-center">
                <p>&copy; {new Date().getFullYear()} Your Company. Все права защищены.</p>
            </Col>
        </Row>
    </Container>
</footer>
  );
}
