import React, { useState, useEffect, useReducer, useContext } from "react";
import {
  Title,
  AddressInfo,
  LoadingContainer,
  PaymentMethodTitle,
  PaymentMethod,
  CartPageContainer,
  PaymentMethodContainer,
  ConfirmButton,
  ProductDescription,
  ProductCard,
  ProductContainer,
  ProductImage,
} from "./styles";

import Footer from "../Footer/index";

import axios from "axios";
import ReactLoading from "react-loading";

import CartContext from "../../context/CartContext";

function CartPage() {
  const cartContext = useContext(CartContext);

  let totalValue = 0;

  cartContext.cart.forEach((product) => {
    totalValue = totalValue + product.price * product.quantity;
  });

  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const baseUrl =
    "https://us-central1-missao-newton.cloudfunctions.net/rappi4A";

  const token = JSON.parse(localStorage.getItem("rappi4")).token;

  const axiosConfig = {
    headers: {
      auth: token,
    },
  };

  const getProfile = async () => {
    try {
      const response = await axios.get(`${baseUrl}/profile`, axiosConfig);
      setUser(response.data.user);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  const cartRender =
    cartContext.cart.length >= 1 ? (
      <div>
        {cartContext.cart.map((product) => {
          return (
            <ProductContainer>
              <ProductCard>
                <ProductImage src={product.photoUrl} />
              </ProductCard>
            </ProductContainer>
          );
        })}
      </div>
    ) : (
      <div>
        <p>Seu carrinho está vazio! </p>
      </div>
    );
  useEffect(() => {
    getProfile();
  }, []);
  console.log(cartContext.cart);
  const render = loading ? (
    <LoadingContainer>
      <ReactLoading type="spin" color="#ff3b30" />{" "}
    </LoadingContainer>
  ) : (
    <CartPageContainer>
      <Title>
        <p>Meu Carrinho</p>
      </Title>
      <AddressInfo>
        <div>
          <p id="addressTitle">Endereço cadastrado</p>
          {user.hasAddress === false ? (
            <p>Não há endereço cadastrado</p>
          ) : (
            <p>{user.address}</p>
          )}
        </div>
      </AddressInfo>
      {cartRender}
      <PaymentMethodContainer>
        <PaymentMethodTitle>
          <p>Forma de Pagamento</p>
        </PaymentMethodTitle>
        <PaymentMethod>
          <div>
            <input type="radio" value="money" id="money" name="payment" />
            <label htmlFor="money">Dinheiro</label>
          </div>
          <div>
            <input type="radio" value="creditCard" id="credit" name="payment" />
            <label htmlFor="credit">Cartão de Crédito</label>
          </div>
        </PaymentMethod>
        <ConfirmButton>
          <button>Confirmar</button>
        </ConfirmButton>
      </PaymentMethodContainer>
      <Footer />
    </CartPageContainer>
  );

  return <div>{render}</div>;
}

export default CartPage;
