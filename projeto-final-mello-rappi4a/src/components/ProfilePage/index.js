import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

import Header from "../Header";

import Edit from "./../../assets/edit.svg";

import { Title, ProfileInfo, AddressInfo, OrderHistory } from "./styles";

const baseUrl = "https://us-central1-missao-newton.cloudfunctions.net/rappi4A";

function ProfilePage() {
  let history = useHistory();
  const [user, setUser] = useState([]);
  const [orderHistory, setOrderHistory] = useState([]);

  useEffect(() => {
    getProfile();
    getOrderHistory();
  }, []);

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
    } catch (error) {
      console.log(error);
    }
  };

  const getOrderHistory = async () => {
    try {
      const response = await axios.get(
        `${baseUrl}/orders/history`,
        axiosConfig
      );
      setOrderHistory(response.data.orders);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const goToEditProfilePage = () => {
    history.push("/edit-profile");
  };

  const goToEditAddressPage = () => {
    history.push("/edit-address");
  };

  return (
    <div>
      <Title>
        <p>Meu perfil</p>
      </Title>
      <hr />

      <ProfileInfo>
        <div>
          <p>{user.name}</p>
          <p>{user.email}</p>
          <p>{user.cpf}</p>
        </div>
        <img src={Edit} alt="Editar" onClick={goToEditProfilePage} />
      </ProfileInfo>

      <AddressInfo>
        <div>
          <p id="addressTitle">Endereço cadastrado</p>
          {user.hasAddress === false ? (
            <p>Não há endereço cadastrado</p>
          ) : (
            <p>{user.address}</p>
          )}
        </div>
        <img src={Edit} alt="Editar" onClick={goToEditAddressPage} />
      </AddressInfo>

      <OrderHistory>
        {orderHistory.length === 0 ? (
          <div>Você não realizou nenhum pedido</div>
        ) : (
          <div>
            <p>Histórico de pedidos</p> <hr />
            {orderHistory.map((order) => {
              return (
                <div key={order.createdAt} className="orderData">
                  <div>
                    <p id="restaurantName">{order.restaurantName}</p>
                    <p id="dateInfo">23 de outubro de 2019</p>
                    <p id="totalPrice">
                      SUBTOTAL R$ {order.totalPrice.toFixed(2)}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </OrderHistory>
      <Header />
    </div>
  );
}

export default ProfilePage;
