import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import useForm from "../../hooks/useForm"
import { login } from "../../functions/axios";
import { PageContainer, Logo, MainContent, Tittle, Button, Link, InputBorder, ShowPasswordIcon} from "./styles"
import logo from "../../assets/logo_colored.svg"
import visible from "../../assets/password_open.svg"
import noVisible from "../../assets/password.svg" 


function LoginPage() {
  let history = useHistory();
  
  const [form, handleFormChange] = useForm({email: "", password: ""})
  const [visiblePassword, setVisiblePassword] = useState(false)

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

  const handleClickShowPassword = () => {
      setVisiblePassword(!visiblePassword)
  }

  return (
    <PageContainer>
      <Logo src={logo} alt="rappi4 logo"/>
      <MainContent>
          <Tittle>Entrar</Tittle>  
          <form onSubmit={handleFormSubmit}>
              <InputBorder>
                  <label>E-mail*</label>
                  <input
                    type="email"
                    onChange={handleFormChange}
                    placeholder="email@email.com"
                    name="email"
                    value={form.email}
                    required
                  />
              </InputBorder>
              <InputBorder>
                  <label>Senha*</label>
                  <input 
                    type="password"
                    onChange={handleFormChange}
                    placeholder="Mínimo 6 caracteres" 
                    name="password"
                    value={form.password}
                    type={visiblePassword ? "text" : "password"}
                    required
                  />
                  <ShowPasswordIcon onClick={handleClickShowPassword} src={visiblePassword ? noVisible : visible}  />
              </InputBorder>
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
