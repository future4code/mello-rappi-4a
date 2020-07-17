import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import CardRestaurant from "./CardRestaurant";
import Footer from "../Footer/index";

import searchIcon from "../../assets/search.svg";
import {
  FeedContainer,
  ContainerTitle,
  Title,
  Search,
  Filter,
  Label,
  SectionRestaurant,
  RestaurantContainer,
  RestaurantCard,
} from "./styles";

function FeedPage(props) {
  const history = useHistory();
  const [restaurantList, setRestaurantList] = useState([]);
  const [selectRestaurant, setSelectRestaurant] = useState([]);
  const baseUrl =
    "https://us-central1-missao-newton.cloudfunctions.net/rappi4A/restaurants";

  useEffect(() => {
    getRestaurantList();
  }, []);

  const getRestaurantList = async () => {
    const token = JSON.parse(localStorage.getItem("rappi4")).token;

    try {
      const axiosConfig = {
        headers: {
          auth: token,
        },
      };

      const response = await axios.get(`${baseUrl}`, axiosConfig);

      setRestaurantList(response.data.restaurants);
    } catch (e) {
      alert("Lista de restaurantes falhou :(");
    }
  };

  const getSelectRestaurant = (category) => {
    const chosenRestaurant = restaurantList.filter(
      (item) => item.category === category
    );

    return setSelectRestaurant(chosenRestaurant);
  };

  const restaurantListFilter = restaurantList.filter((item, index, arr) => {
    return (
      arr.map((mapItem) => mapItem["category"]).indexOf(item["category"]) ===
      index
    );
  });

  const goToSearchPage = () => {
    history.push("/search");
  };

  return (
    <FeedContainer>
      <ContainerTitle>
        <Title>
          <p>Rappi4</p>
        </Title>
      </ContainerTitle>
      <Search>
        <img src={searchIcon} alt="Ícone de busca" />
        <input type="text" placeholder="Restaurante" onClick={goToSearchPage} />
      </Search>
      <Filter>
        {restaurantListFilter.map((item) => {
          return (
            <article key={item.id}>
              <Label onClick={() => getSelectRestaurant(item.category)}>
                {item.category}
              </Label>
            </article>
          );
        })}
      </Filter>
      <SectionRestaurant>
        {selectRestaurant.length === 0 ? (
          <CardRestaurant />
        ) : (
          selectRestaurant.map((item) => {
            return (
              <RestaurantContainer key={item.id}>
                <RestaurantCard>
                  <img src={item.logoUrl} alt="Logo do restaurante" />
                  <p>{item.name}</p>
                  <article>
                    <span>
                      {item.deliveryTime} - {item.deliveryTime + 10} min
                    </span>
                    <span>Frete R$6,00</span>
                  </article>
                </RestaurantCard>
              </RestaurantContainer>
            );
          })
        )}
      </SectionRestaurant>
      <Footer />
    </FeedContainer>
  );
}

export default FeedPage;
