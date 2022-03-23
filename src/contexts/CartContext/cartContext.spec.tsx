import React, { useContext } from 'react';
import { waitFor } from '@testing-library/react-native';
import { renderHook, act } from '@testing-library/react-hooks';
import { CartProvider, CartContext } from '.';

describe('CarContext Context', () => {
  it('should be able to add product to cart', () => {

    const { result } = renderHook(() => useContext(CartContext), {
      wrapper: CartProvider
    });

    act(() => result.current.handleAddProductToCart({
      id: 1,
      title: 'Camisa de time',
      description: 'Camisa do seu time do coração',
      image: 'https://via.placeholder.com/150/0000FF/808080 ?Text=Digital.com',
      price: 110.99,
      amout: 1,
    }));

    waitFor(() => {
      expect(result.current.cart).toBeTruthy();
      expect(result.current.cart[0].title).toBe('Camisa de time');
    })

  });

  it('should be able to clear the cart', () => {

    const { result } = renderHook(() => useContext(CartContext), {
      wrapper: CartProvider
    });

    act(() => result.current.clearCart());

    waitFor(() => {
      expect(result.current.cart).toEqual([]);
    })

  });

});