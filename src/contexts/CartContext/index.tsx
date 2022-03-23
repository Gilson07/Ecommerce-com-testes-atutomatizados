import React, {
  createContext,
  useState,
  ReactNode
} from 'react';

// Import Components
import { ProductProps } from '@components/Product';

// Interfaces
interface CartProviderProps {
  children: ReactNode;
}

interface CartContexData {
  handleAddProductToCart(newProduct: ProductProps): void;
  handleRemoveItemFromProductInCart(itemProduct: ProductProps): void;
  handleRemoveProductFromCart(itemProduct: ProductProps): void;
  clearCart(): void;
}

// Defines Contexts
export const CartContext = createContext<CartContexData>({} as CartContexData);

export const CartProvider = ({ children }: CartProviderProps) => {

  const [cart, setCart] = useState<ProductProps[]>([]);

  // Add Products To Cart
  function handleAddProductToCart(newProduct: ProductProps) {
    const aux = Object.assign([], cart);
    const productIndex = aux.findIndex(listProduct => listProduct.id === newProduct.id);
    if (productIndex >= 0) {
      aux[productIndex].amout += 1;
      setCart(aux);
    } else {
      setCart([...cart, { ...newProduct, amout: 1 }])
    }
  }

  // Remove An Item From cCart
  function handleRemoveItemFromProductInCart(itemProduct: ProductProps) {
    const aux = Object.assign([], cart);
    const productIndex = aux.findIndex((listProduct: ProductProps) => listProduct.id === itemProduct.id);
    const amountProduct = aux[productIndex].amout;
    if (amountProduct > 1) {
      aux[productIndex].amout -= 1;
      setCart(aux);
    } else {
      aux.splice(productIndex, 1);
      setCart(aux);
    }
  }

  // Remove All Product From Cart
  function handleRemoveProductFromCart(itemProduct: ProductProps) {
    const aux = Object.assign([], cart);
    const productIndex = aux.findIndex((listProduct: ProductProps) => listProduct.id === itemProduct.id);
    aux.splice(productIndex, 1);
    setCart(aux);
  }

  // Clear The Entire Cart
  function clearCart() {
    setCart([]);
  }

  return (
    <CartContext.Provider value={{ cart, handleAddProductToCart, handleRemoveItemFromProductInCart, handleRemoveProductFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}