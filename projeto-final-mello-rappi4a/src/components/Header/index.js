import React from "react";
import { useHistory } from "react-router-dom";

import HomePage from "./../../assets/homepage.svg";
import Avatar from "./../../assets/avatar.svg";
import Cart from "./../../assets/shopping_cart.svg";

import { HeaderBox, HeaderIcons } from "./styles";

function Header() {
  let history = useHistory();

  const goToFeedPage = () => {
    history.push("/feed");
  };

  const goToCartPage = () => {
    history.push("/cart");
  };

  const goToProfilePage = () => {
    history.push("/profile");
  };

  return (
    <HeaderBox>
      <HeaderIcons>
        <img src={HomePage} alt={"Home"} onClick={goToFeedPage} />
        <img src={Cart} alt={"Carrinho"} onClick={goToCartPage} />
        <img src={Avatar} alt={"Perfil"} onClick={goToProfilePage} />
      </HeaderIcons>
    </HeaderBox>
  );
}

export default Header;
