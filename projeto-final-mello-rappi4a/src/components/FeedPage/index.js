import React from "react";
import { useHistory } from "react-router-dom";
import Footer from "../Footer/index";

function FeedPage() {
  let history = useHistory();

  console.log(JSON.parse(localStorage.getItem("rappi4")).token)

  const goToSearchPage = () => {
    history.push("/search");
  };

  const goToRestaurantPage = () => {
    history.push("/restaurant");
  };

  return (
    <div>
      FeedPage
      <button onClick={goToSearchPage}>Buscar</button>
      <button onClick={goToRestaurantPage}>Restaurante</button>
      <Footer />
    </div>
  );
}

export default FeedPage;
