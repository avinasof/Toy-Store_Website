import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import storeItems from "../data/items.json";
import { StoreItem } from "../components/StoreItem";
import { ProductModal } from "../components/ProductModal";

export function Store() {
    const [selectedProduct, setSelectedProduct] = useState<null | any>(null);
    const [productDetails, setProductDetails] = useState<null | any>(null);

    const handleProductClick = async (product: any) => {
        setSelectedProduct(product);
       
        const response = await fetch(`https://fakestoreapi.com/products/${product.id}`);
        const data = await response.json();
        setProductDetails(data);
    };

    return (
        <>
            <h1>Магазин</h1>
            <Row md={2} xs={1} lg={3} className="g-3">
                {storeItems.map(item => (
                    <Col key={item.id} onClick={() => handleProductClick(item)}>
                        <StoreItem {...item} />
                    </Col>
                ))}
            </Row>
            <ProductModal
                show={productDetails !== null}
                onHide={() => setProductDetails(null)}
                product={productDetails}
            />
        </>
    );
}
