import React from 'react';
import { TouchableOpacityProps } from 'react-native';

// Import Components
import { ProductProps } from '@components/Product';

// Types
type Props = TouchableOpacityProps & {
  product: ProductProps;
  addProduct: (product: ProductProps) => void;
  removeProduct: (product: ProductProps) => void;
}

// Styles
import {
  Container,
  ProductImage,
  Details,
  DetailWrapper,
  Title,
  Description,
  Price,
  Amount,
  Decrement,
  Icon,
  Count,
  Increment
} from './styles';

export function ProductInCart({ product, addProduct, removeProduct }: Props) {

  return (
    <Container>

      <ProductImage source={{ uri: product.image }} />

      <Details>
        <DetailWrapper>
          <Title numberOfLines={1}>{product.title}</Title>
          <Description numberOfLines={2}>{product.description}</Description>
        </DetailWrapper>
        <Price>{`R$ ${product.price}`}</Price>
      </Details>

      <Amount>
        <Decrement onPress={() => removeProduct(product)}>
          <Icon name="remove" />
        </Decrement>
        <Count>{product.amout}</Count>
        <Increment onPress={() => addProduct(product)}>
          <Icon name="ios-add-sharp" />
        </Increment>
      </Amount>

    </Container>
  );
}