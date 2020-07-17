import React, { useState, useEffect } from "react";
import axios from "axios"
import { useHistory } from "react-router-dom";

import { RestaurantContainer, RestaurantCard } from "./styles"

const CardRestaurant = () => {
  const history = useHistory();
  const [restaurantList, setRestaurantList] = useState([])
  const baseUrl = "https://us-central1-missao-newton.cloudfunctions.net/rappi4A/restaurants"

  useEffect(() => {
    getRestaurantList();
  }, []);
    
  const getRestaurantList = async () => {
    const token = JSON.parse(localStorage.getItem("rappi4")).token
    
    try {
      const axiosConfig = {
        headers: {
          auth: token
        } 
      } 
    
      const response = await axios.get(`${baseUrl}`, axiosConfig)
    
      setRestaurantList(response.data.restaurants)
    } catch (e) {
      alert("Lista de restaurantes falhou :(")
    }
  }

  const goToRestaurantPage = (restaurantId) => {
    history.push(`/restaurant/${restaurantId}`);
  };

  return (
    <>
      {restaurantList.map(item => {
        return (
          <RestaurantContainer key={item.id} onClick={() => goToRestaurantPage(item.id)} >
            <RestaurantCard>
              <img src={item.logoUrl} alt="Logo do restaurante" />
              <p>{item.name}</p>
              <article>
                <span>{item.deliveryTime} - {item.deliveryTime + 10} min</span>
                <span>Frete R$6,00</span>
              </article>
            </RestaurantCard>
          </RestaurantContainer>
        )
      })}
    </>
  )
}

export default CardRestaurant;