import React, { useState, useEffect, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// Import Components
import { Search } from '@components/Search';
import { Product, ProductProps } from '@components/Product';
import { Load } from '@components/Load';

// Import Cotexts
import { CartContext } from '@contexts/CartContext';

// Import Routes
import { StackParamsList } from '../../routes/app.routes';

// Import Services
import { api } from '@services/api';

// Types
type homeScreenProp = NativeStackNavigationProp<StackParamsList, 'Home'>;

// Styles
import {
  Container,
  Header,
  UserWrapper,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  UserName,
  CartContainer,
  BadgeCount,
  ButtonCart,
  Icon,
  ProductList,
  MenuHeader,
  MenuItemsNumber,
  Title
} from './styles';

export function Home() {
  const navigation = useNavigation<homeScreenProp>();

  const [products, setProducts] = useState<ProductProps[]>([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);

  // Accessing Context
  const { cart, handleAddProductToCart, handleRemoveProductFromCart } = useContext(CartContext);

  // Load Products
  async function fetchProducts(value: string) {
    try {
      const response = await api.get('/products');
      setProducts(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  // Render Uploaded Products
  function renderProducts({ item: product }: ProductProps) {
    return (
      <Product product={product} addProduct={() => handleAddProductToCart(product)} removeProduct={() => handleRemoveProductFromCart(product)} />
    )
  }

  function handleSearch() {
    fetchProducts(search);
  }

  function handleSearchClear() {
    setSearch('');
    fetchProducts('');
  }

  // Navigate to ShoppingCart
  function handleShoppingCart() {
    navigation.navigate('ShoppingCart');
  }

  useEffect(() => {
    fetchProducts('');
  }, []);

  return (
    <Container>

      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo source={{ uri: 'https://avatars.githubusercontent.com/u/22238804?v=4' }} />
            <User>
              <UserGreeting>Olá, </UserGreeting>
              <UserName>Gilson</UserName>
            </User>
          </UserInfo>

          <CartContainer onPress={handleShoppingCart}>
            <BadgeCount visible={cart.length < 1 ? false : true}>{cart.length}</BadgeCount>
            <ButtonCart>
              <Icon name="cart-outline" />
            </ButtonCart>
          </CartContainer>
        </UserWrapper>
      </Header>

      <Search
        value={search}
        onChangeText={(text) => setSearch(text)}
        onSearch={handleSearch}
        onClear={handleSearchClear}
      />

      <MenuHeader>
        <Title>Produtos</Title>
        <MenuItemsNumber>{`${products.length} produtos`}</MenuItemsNumber>
      </MenuHeader>

      {
        loading
          ? <Load />
          : products.length > 0 &&
          <ProductList
            data={products}
            numColumns={2}
            keyExtractor={(item) => item.id}
            renderItem={renderProducts}
          />
      }

    </Container>
  );
}