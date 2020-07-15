import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import DocumentTitle from "react-document-title";

import SplashScreen from "./SplashScreen"
import CartPage from "./CartPage/index";
import EditAddressPage from "./EditAddressPage/index";
import EditProfilePage from "./EditProfilePage/index";
import FeedPage from "./FeedPage/index";
import LoginPage from "./LoginPage/index";
import ProfilePage from "./ProfilePage/index";
import RestaurantPage from "./RestaurantPage/index";
import SearchPage from "./SearchPage/index";
import SignUpAddressPage from "./SignUpAddressPage/index";
import SignUpPage from "./SignUpPage/index";
import ProtectedRoute from "./ProtectedRoute"


const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={SplashScreen} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/signup" component={SignUpPage} />
          {/* <DocumentTitle title="Cadastro"> */}
        <ProtectedRoute exact path="/cart" component={CartPage} />
          {/* <DocumentTitle title="Carrinho"> */}
        <ProtectedRoute exact path="/edit-address" component={EditAddressPage} />
          {/* <DocumentTitle title="Editar endereço"> */}      
        <ProtectedRoute exact path="/edit-profile" component={EditProfilePage} />
          {/* <DocumentTitle title="Editar perfil"> */}        
        <ProtectedRoute exact path="/feed" component={FeedPage} />
          {/* <DocumentTitle title="Home"> */}       
        <ProtectedRoute exact path="/profile" component={ProfilePage} />
          {/* <DocumentTitle title="Seu perfil"> */}      
        <ProtectedRoute exact path="/restaurant" component={RestaurantPage} />
          {/* <DocumentTitle title="Restaurante"> */}
        <ProtectedRoute exact path="/search" component={SearchPage} />
          {/* <DocumentTitle title="Buscar"> */}   
        <ProtectedRoute exact path="/signup-address" component={SignUpAddressPage} />
          {/* <DocumentTitle title="Cadastrar endereço"> */}
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
