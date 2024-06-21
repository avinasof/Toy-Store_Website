import React from "react";
import { Button, Card } from "react-bootstrap";
import { formatCurrency } from "../utilities/formatCurrency";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { useTheme } from "../context/ThemeContext"; // Import useTheme hook

type StoreItemProps = {
    id: number;
    name: string;
    price: number;
    imgUrl: string;
};

export function StoreItem({ id, name, price, imgUrl }: StoreItemProps) {
    const { getItemQuanity, increaseCartQuantity, decreaseCartQuantity, removeFromCart } = useShoppingCart();
    const { darkMode } = useTheme(); // Use useTheme hook to get darkMode state

    const quantity = getItemQuanity(id);

    return (
        <Card className="h-100">
            <Card.Img variant="top" src={imgUrl} height="200px" style={{ objectFit: "cover" }} />
            <Card.Body className="d-flex flex-column">
                <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
                    <span className="fs-2">{name}</span>
                    <span className="ms-2 text-muted">{formatCurrency(price)}</span>
                </Card.Title>
                <div className="mt-auto">
                    {quantity === 0 ? (
                        <Button
                            className="w-100"
                            onClick={(e) => {
                                e.stopPropagation();
                                increaseCartQuantity(id);
                            }}
                            style={{
                                backgroundColor: darkMode ? '#6c757d' : '#FFCEEF',
                                color: darkMode ? '#fff' : '#212529',
                            }}
                        >
                            + Добавить в корзину
                        </Button>
                    ) : (
                        <div className="d-flex align-items-center flex-column" style={{ gap: ".5rem" }}>
                            <div className="d-flex align-items-center justify-content-center" style={{ gap: ".5rem" }}>
                                <Button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        decreaseCartQuantity(id);
                                    }}
                                    style={{
                                        backgroundColor: darkMode ? '#6c757d' : '#FFCEEF',
                                        color: darkMode ? '#fff' : '#212529',
                                    }}
                                >
                                    -
                                </Button>
                                <div>
                                    <span className="fs-3">{quantity}</span> в корзине
                                </div>
                                <Button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        increaseCartQuantity(id);
                                    }}
                                    style={{
                                        backgroundColor: darkMode ? '#6c757d' : '#FFCEEF',
                                        color: darkMode ? '#fff' : '#212529',
                                    }}
                                >
                                    +
                                </Button>
                            </div>
                            <Button
                                variant="danger"
                                size="sm"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    removeFromCart(id);
                                }}
                                style={{
                                    backgroundColor: '#dc3545',
                                    borderColor: '#dc3545',
                                    color: '#fff',
                                }}
                            >
                                Удалить
                            </Button>
                        </div>
                    )}
                </div>
            </Card.Body>
        </Card>
    );
}
