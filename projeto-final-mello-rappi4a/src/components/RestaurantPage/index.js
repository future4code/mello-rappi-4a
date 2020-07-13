import React from "react";
import { useHistory } from "react-router-dom";

function RestaurantPage() {
  let history = useHistory();

  const goToFeedPage = () => {
    history.push("/feed");
  };

  return (
    <div>
      RestaurantPage
      <button onClick={goToFeedPage}>Home</button>
    </div>
  );
}

export default RestaurantPage;
