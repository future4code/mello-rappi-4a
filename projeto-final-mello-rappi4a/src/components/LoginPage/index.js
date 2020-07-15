import React from "react";
import { useHistory } from "react-router-dom";

import useForm from "../../hooks/useForm"
import { login } from "../../functions/axios";
import { LoginContainer, Tittle, Button } from "./styles"
import logo from "../../assets/logo_colored.svg"

//componentes material-ui
import TextField from "@material-ui/core/TextField"



function LoginPage() {
  let history = useHistory();
  const [form, handleFormChange] = useForm({email: "", password: ""})

  const handleFormSubmit = async (event) => {
      event.preventDefault()
      const response = await login(form)
      if (response.token) {
          localStorage.setItem("rappi4", JSON.stringify(response))
          history.push("/feed")
      } else {
          window.alert(response.message)
          history.push("/signup")
      }
  }


  const goToSignUpPage = () => {
    history.push("/signup");
  }
  

  return (
    <LoginContainer>
      <img src={logo} alt="rappi4 logo"/>
      <Tittle>Entrar</Tittle>  
      <form onSubmit={handleFormSubmit}>
          <TextField 
            onChange={handleFormChange}
            variant="outlined"
            placeholder="email@email.com"
            label="E-mail"
            fullWidth
            name="email"
            value={form.email}
            type="email"
            required 
          />
          <TextField
            onChange={handleFormChange}
            variant="outlined"
            placeholder="Mínimo 6 caracteres" 
            label="Senha"
            fullWidth
            name="password"
            value={form.password}
            type="password"
            required
             
          />
          <Button type="submit">Entrar</Button>
          <button onClick={goToSignUpPage}>Fazer cadastro</button>
      </form>
    </LoginContainer>
  );
}

export default LoginPage;
