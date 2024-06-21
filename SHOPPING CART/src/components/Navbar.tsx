import React, { useState } from 'react';
import { Button, Container, Nav, Navbar as NavbarBs, Modal } from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';
import { useShoppingCart } from '../context/ShoppingCartContext';
import { useTheme } from '../context/ThemeContext';
import AdminLogin from './AdminLogin';

export function Navbar() {
    const { openCart, cartQuantity } = useShoppingCart();
    const { darkMode, toggleTheme } = useTheme();
    const [showLogin, setShowLogin] = useState(false);
    const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
    const navigate = useNavigate();

    const handleAdminClick = () => {
        setShowLogin(true);
    };

    const handleLogin = (isLoggedIn: boolean) => {
        setShowLogin(false);
        setIsAdminLoggedIn(isLoggedIn);
        if (isLoggedIn) {
            navigate('/admin');
        }
    };

    return (
        <>
            <NavbarBs sticky="top" className={`navbar-bg shadow-sm mb-3 ${darkMode ? 'navbar-dark bg-dark' : ''}`} style={{ backgroundColor: darkMode ? '' : '#FFCEEF' }}>
                <Container>
                    <Nav className="me-auto">
                        <Nav.Link as={NavLink} to="/">Главная</Nav.Link>
                        <Nav.Link as={NavLink} to="/store">Магазин</Nav.Link>
                        <Nav.Link as={NavLink} to="/shop">Магазин2</Nav.Link>
                        <Nav.Link as={NavLink} to="/about">О нас</Nav.Link>
                        <Nav.Link as={NavLink} to="/toy-store">Одежда</Nav.Link>
                        <Nav.Link as="div" onClick={handleAdminClick}>Админ</Nav.Link>
                    </Nav>
                    <Button variant="outline-secondary" onClick={toggleTheme}>
                        {darkMode ? 'Светлая тема' : 'Темная тема'}
                    </Button>
                    {cartQuantity > 0 && (
                        <Button onClick={openCart} style={{ width: "3rem", height: "3rem", position: "relative" }}
                            variant="outline-primary"
                            className="rounded-circle">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512"
                                fill="currentColor">
                                <path d="M96 0C107.5 0 117.4 8.19 119.6 19.51L121.1 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0H96zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464zM512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464z" />
                            </svg>
                            <div className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
                                style={{ color: "white", width: "1.5rem", height: "1.5rem", position: "absolute", bottom: 0, right: 0, transform: "translate(25%,25%)" }}>
                                {cartQuantity}
                            </div>
                        </Button>
                    )}
                </Container>
            </NavbarBs>

            <Modal show={showLogin} onHide={() => setShowLogin(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Админ Вход</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AdminLogin onLogin={handleLogin} />
                </Modal.Body>
            </Modal>
        </>
    );
}
