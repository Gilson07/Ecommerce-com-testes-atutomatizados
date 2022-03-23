import React, { useContext } from 'react';
import { TouchableOpacityProps } from 'react-native';

import { CartContext } from '@contexts/CartContext';

// Types
export type ProductProps = {
  id: number;
  title: string;
  description: string;
  image: string;
  price: number;
  amout: number;
}

type Props = TouchableOpacityProps & {
  product: ProductProps;
  addProduct: () => void;
  removeProduct: () => void;
}

// Styles
import {
  Container,
  ProductImage,
  Details,
  Description,
  Price,
  Button,
  AddToCart
} from './styles';

export function Product({ product, addProduct, removeProduct }: Props) {

  // Accessing Context
  const { cart } = useContext(CartContext);

  return (
    <Container>

      <ProductImage source={{ uri: product.image }} />

      <Details>
        <Description numberOfLines={2}>{product.title}</Description>
        <Price>{`R$ ${product.price}`}</Price>
      </Details>

      {
        cart.some((listProduct) => listProduct.id === product.id) ? (
          <Button isAddButton={false} onPress={() => removeProduct(product)}>
            <AddToCart>
              Remover
            </AddToCart>
          </Button>
        ) : (
          <Button isAddButton onPress={() => addProduct(product)}>
            <AddToCart>
              Adicionar
            </AddToCart>
          </Button>
        )
      }

    </Container>
  );
}