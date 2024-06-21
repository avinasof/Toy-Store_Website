// interfaces.ts

export interface Product {
    id: number;
    name: string;
    price: number;
    imgUrl: string;
    details: string;
    additionalImages: string[];
}

export interface ModalState {
    showModal: boolean;
    selectedProduct: Product | null;
}
