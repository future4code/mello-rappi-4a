import React from "react";


import { RestaurantContainer, RestaurantCard } from "./styles"

const CardRestaurant = (props) => {
  
  return (
    
      <RestaurantContainer>
        <RestaurantCard >
          <img src={props.logoUrl} alt="Logo do restaurante" />
          <p>{props.name}</p>
          <article>
            <span>{props.deliveryTime} - {props.deliveryTime + 10} min</span>
            <span>R${props.shipping.toFixed(2)}</span>
          </article>
        </RestaurantCard>
      </RestaurantContainer>
          
    
  )
}

export default CardRestaurant;