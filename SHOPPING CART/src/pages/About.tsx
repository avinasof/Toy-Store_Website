
import { Button, Container, Row, Col, Form } from 'react-bootstrap';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useTheme } from '../context/ThemeContext'; // Import useTheme hook

interface ContactFormInputs {
    name: string;
    email: string;
    message: string;
}

export function About() {
    const { register, handleSubmit, formState: { errors } } = useForm<ContactFormInputs>();
    const { darkMode } = useTheme(); // Use useTheme hook to get darkMode state

    const onSubmit: SubmitHandler<ContactFormInputs> = data => {
        console.log(data);
        // Here you can handle form submission, e.g., send data to the server
    };
  
    return (
        <Container>
            <h1 className="mb-4">О нас</h1>
            <p>Добро пожаловать в наш магазин игрушек! Мы стремимся приносить радость и счастье детям и взрослым, предлагая широкий ассортимент качественных игрушек.У нас представлен большой и разнообразный ассортимент игрушек по очень выгодным ценам. Знаменитые на весь мир конструкторы LEGO , невероятно популярные очаровательные куколки L.O.L. Surprise, спрятанные в многослойный шарик-сюрприз, игрушки, созданные по сюжетам любимых мультфильмов: «Черепашки Ниндзя», «Рев и заводная команда», «Щенячий патруль», «Тобот». Куклы «Принцессы Диснея», «Сказочный патруль»; интерактивные куклы Беби Борн. Мягкие игрушки Aurora, Disney, модели машинок Welly, самые разнообразные наборы для творчества , PLAY-DOH, бластеры Nerf, электромобили Peg-Perego, игрушки и наборы для малышей Fisher-Price и Mega Bloks , товары для игры на свежем воздухе от Little Tikes и даже множество самых разнообразных аксессуаров для праздника , которые помогут Вам устроить настоящую вечеринку для юных любителей приключений.

            Вы тоже можете открыть свой магазин по продаже игрушек и товаров для детей под</p>

            <h2 className="mt-5">Обратная связь</h2>
            <Row>
                <Col md={8} className="mx-auto">
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Form.Group className="mb-3" controlId="formName">
                            <Form.Label>Имя</Form.Label>
                            <Form.Control type="text" placeholder="Введите имя" {...register("name", { required: true })} />
                            {errors.name && <span className="text-danger">Это поле обязательно для заполнения</span>}
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Введите email" {...register("email", { required: true })} />
                            {errors.email && <span className="text-danger">Это поле обязательно для заполнения</span>}
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formMessage">
                            <Form.Label>Сообщение</Form.Label>
                            <Form.Control as="textarea" rows={5} placeholder="Введите сообщение" {...register("message", { required: true })} />
                            {errors.message && <span className="text-danger">Это поле обязательно для заполнения</span>}
                        </Form.Group>

                        <Button
                            variant="primary"
                            type="submit"
                            style={{
                                backgroundColor: darkMode ? '#6c757d' : '#FFCEEF',
                                color: darkMode ? '#fff' : '#212529',
                                border: 'none',
                            }}
                        >
                            Отправить
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}
