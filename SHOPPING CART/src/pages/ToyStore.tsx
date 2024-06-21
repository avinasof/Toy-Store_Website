import { useState, useEffect } from "react";
import { Row, Col, Card, OverlayTrigger, Tooltip } from "react-bootstrap";

type Toy = {
    id: number;
    title: string;
    description: string;
    image: string;
    price: number;
    category: string;
};

const ToyStore = () => {
    const [toys, setToys] = useState<Toy[]>([]);

    useEffect(() => {
        const fetchToys = async () => {
            try {
                const response = await fetch("https://fakestoreapi.com/products?limit=10&category=toys");
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const data = await response.json();
                setToys(data);
            } catch (error) {
                console.error("Error fetching toys:", error);
            }
        };

        fetchToys();
    }, []);

    return (
        <Row xs={1} md={2} lg={3} className="g-4">
            {toys.map((toy) => (
                <Col key={toy.id}>
                    <Card className="h-100">
                        <OverlayTrigger
                            placement="bottom"
                            overlay={<Tooltip id={`tooltip-${toy.id}`}>{toy.title}</Tooltip>}
                        >
                            <Card.Img
                                variant="top"
                                src={toy.image}
                                alt={toy.title}
                                style={{ height: "300px", objectFit: "cover", cursor: "pointer" }}
                            />
                        </OverlayTrigger>
                        <Card.Body>
                            <Card.Title>{toy.title}</Card.Title>
                            <Card.Text>{toy.description}</Card.Text>
                            <Card.Text className="text-primary">${toy.price}</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    );
};

export default ToyStore;
