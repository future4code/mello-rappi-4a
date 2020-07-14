import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

import Header from "../Header";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IlM3Zjg0RUY4dU11Z29oZ0JVa3gyIiwibmFtZSI6IkNhbWlsYSIsImVtYWlsIjoiY2FtaWxhLm1pcmFuZGEubW91cmFAZ21haWwuY29tIiwiY3BmIjoiNDYzLjIzOS4zMDgtODkiLCJoYXNBZGRyZXNzIjp0cnVlLCJhZGRyZXNzIjoiUi4gUGVpeG90byBHb21pZGUsIDI4MSwgNzcgLSBKZC4gUGF1bGlzdGEiLCJpYXQiOjE1OTQ2Njk3NjJ9.6FxaW6pRsbM1fR04PllzKZXFPJT3HvRfg_7gjYV4msg";

const baseUrl = "https://us-central1-missao-newton.cloudfunctions.net/rappi4A";

function ProfilePage() {
  let history = useHistory();
  const [user, setUser] = useState([]);
  const [orderHistory, setOrderHistory] = useState([]);

  useEffect(() => {
    getProfile();
    getOrderHistory();
  }, []);

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
      <p>{user.name}</p>
      <p>{user.email}</p>
      <p>{user.cpf}</p>
      <button onClick={goToEditProfilePage}>Editar perfil</button>
      <button onClick={goToEditAddressPage}>Editar endereço</button>

      <hr />
      {orderHistory.length === 0 ? (
        <div>Você não realizou nenhum pedido</div>
      ) : (
        <div>
          <p>Histórico de pedidos</p>
          {orderHistory.map((order) => {
            return (
              <div key={order.createdAt}>
                <p>{order.restaurantName}</p>
                <p>R$ {order.totalPrice.toFixed(2)}</p>
              </div>
            );
          })}
        </div>
      )}
      <Header />
    </div>
  );
}

export default ProfilePage;
