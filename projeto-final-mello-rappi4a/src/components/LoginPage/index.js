import React from "react";
import { useHistory } from "react-router-dom";

import useForm from "../../hooks/useForm"
import { login } from "../../functions/axios";
import { PageContainer, Logo, MainContent, Tittle, Button, Link } from "./styles"
import logo from "../../assets/logo_colored.svg"
//material-ui
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField"

//estilo para componentes do material
const useStyles = makeStyles((theme) => ({
    input: {
      margin: theme.spacing(1, 0),
    },
}));

function LoginPage() {
  let history = useHistory();
  const classes = useStyles()   
  
  const [form, handleFormChange] = useForm({email: "", password: ""})

  const handleFormSubmit = async (event) => {
      event.preventDefault()
      const response = await login(form)
      if (response.token) {
          localStorage.setItem("rappi4", JSON.stringify(response))
          history.push("/feed")
      } else {
          window.alert(response.message)
      }
  }

  return (
    <PageContainer>
      <Logo src={logo} alt="rappi4 logo"/>
      <MainContent>
          <Tittle>Entrar</Tittle>  
          <form onSubmit={handleFormSubmit}>
              <TextField 
                className={classes.input}
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
                className={classes.input}
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
          </form>
          <Link
                onClick={() => history.push("/signup")}
              >
                  Não possui cadastro? Clique aqui.
          </Link>
      </MainContent>
    </PageContainer>
  );
}

export default LoginPage;
