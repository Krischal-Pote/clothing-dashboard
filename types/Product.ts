export interface Product {
  id: string;
  productName: string;
  category: string;
  color: string;
  sizes: {
    S: boolean;
    M: boolean;
    L: boolean;
    XL: boolean;
  };
  price: string;
  currency: string;
  stock: string;
  releaseDate: string;
}
