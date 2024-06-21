import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

interface AdminLoginProps {
    onLogin: (isLoggedIn: boolean) => void;
}

const AdminLogin: React.FC<AdminLoginProps> = ({ onLogin }) => {
    const [password, setPassword] = useState('');
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (password === 'Admin_1111') {
            onLogin(true);
            setError(null);
        } else {
            setError('Неправильный пароль');
        }
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formPassword">
                <Form.Label>Пароль</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="Введите пароль"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </Form.Group>
            <Button variant="primary" type="submit" className="mt-3">
                Войти
            </Button>
            {error && <Alert variant="danger" className="mt-3">{error}</Alert>}
        </Form>
    );
};

export default AdminLogin;
