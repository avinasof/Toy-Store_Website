import React, { useState, FormEvent } from "react";

interface AddProductFormProps {
    onAddProduct: (productName: string, productPrice: number) => void;
}

const AddProductForm: React.FC<AddProductFormProps> = ({ onAddProduct }) => {
    const [productName, setProductName] = useState<string>("");
    const [productPrice, setProductPrice] = useState<number>(0);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onAddProduct(productName, productPrice);
        // Reset form fields
        setProductName("");
        setProductPrice(0);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Product Name"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                required
            />
            <input
                type="number"
                placeholder="Product Price"
                value={productPrice}
                onChange={(e) => setProductPrice(Number(e.target.value))}
                required
            />
            <button type="submit">Add Product</button>
        </form>
    );
};

export default AddProductForm;
