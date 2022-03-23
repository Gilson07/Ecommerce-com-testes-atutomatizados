import React, { useContext } from 'react';

// Import Components 
import { ButtonBack } from '@components/ButtonBack';
import { ProductInCart } from '@components/ProductInCart';

// Import Cotexts
import { CartContext } from '@contexts/CartContext';

// Styles
import {
  Container,
  EmptyContainer,
  EmptyTitle,
  Image,
  Header,
  HeaderWrapper,
  TitleHeader,
  CleanBag,
  TitleBag,
  Content,
} from './styles';

export function ShoppingCart({ navigation }) {

  // Accessing Context
  const { cart, handleAddProductToCart, handleRemoveItemFromProductInCart, clearCart } = useContext(CartContext);

  // Navigate to Home
  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <Container>

      <Header>
        <HeaderWrapper>
          <ButtonBack onPress={handleGoBack} />
          <TitleHeader>Sacola</TitleHeader>
          <CleanBag onPress={clearCart}>
            <TitleBag>Limpar</TitleBag>
          </CleanBag>
        </HeaderWrapper>
      </Header>

      <Content>
        {
          cart.length ?
            cart.map(product => (
              <ProductInCart key={product.id} product={product} addProduct={() => handleAddProductToCart(product)} removeProduct={handleRemoveItemFromProductInCart} />
            ))
            :
            <EmptyContainer>
              <EmptyTitle>O seu carrinho está vazio!</EmptyTitle>
              <Image source={require('@assets/images/emptyCart.png')} />
            </EmptyContainer>
        }
      </Content>

    </Container>
  )
}