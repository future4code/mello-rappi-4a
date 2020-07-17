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
} from "./styles";

import Footer from "../Footer/index";

import axios from "axios";
import ReactLoading from "react-loading";

import cartContext from "../../context/cart";

function CartPage() {
  const { cart, dispatch } = useContext(cartContext);
  const [cartProducts, setCartProducts] = useState([cart.products]);
  const [cartSubtotal, setCartSubtotal] = useState([cart.subtotal]);

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

  useEffect(() => {
    getProfile();
  }, []);

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
