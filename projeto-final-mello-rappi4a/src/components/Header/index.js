import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import HomePage from "./../../assets/homepage.svg";
import Avatar from "./../../assets/avatar.svg";
import Cart from "./../../assets/shopping_cart.svg";
import HomePageClicked from "./../../assets/homepage_clicked.svg";
import AvatarClicked from "./../../assets/avatar_clicked.svg";
import CartClicked from "./../../assets/shopping_cart_clicked.svg";

import { HeaderBox } from "./styles";

function Header() {
  let history = useHistory();
  const [homeButton, setHomeButton] = useState(true);
  const [avatarButton, setAvatarButton] = useState(false);
  const [cartButton, setCartButton] = useState(false);

  const goToFeedPage = () => {
    history.push("/feed");

    setHomeButton(true);
    setCartButton(false);
    setAvatarButton(false);
  };

  const goToCartPage = () => {
    history.push("/cart");

    setHomeButton(false);
    setCartButton(true);
    setAvatarButton(false);
  };

  const goToProfilePage = () => {
    history.push("/profile");

    setHomeButton(false);
    setCartButton(false);
    setAvatarButton(true);
  };

  return (
    <HeaderBox>
      {homeButton ? (
        <img src={HomePageClicked} alt={"Home"} onClick={goToFeedPage} />
      ) : (
        <img src={HomePage} alt={"Home"} onClick={goToFeedPage} />
      )}

      {cartButton ? (
        <img src={CartClicked} alt={"Carrinho"} onClick={goToCartPage} />
      ) : (
        <img src={Cart} alt={"Carrinho"} onClick={goToCartPage} />
      )}

      {avatarButton ? (
        <img src={AvatarClicked} alt={"Perfil"} onClick={goToProfilePage} />
      ) : (
        <img src={Avatar} alt={"Perfil"} onClick={goToProfilePage} />
      )}
    </HeaderBox>
  );
}

export default Header;
