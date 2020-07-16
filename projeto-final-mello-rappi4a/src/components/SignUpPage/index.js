import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import useForm from "../../hooks/useForm";
import { signup } from "../../functions/axios";
import {
  PageContainer,
  Logo,
  Button,
  ShowPasswordIcon,
  SignUpMainContent,
  SignUpTittle,
  SignUpInputBorder,
} from "./../../styles/forms";

import logo from "../../assets/logo_colored.svg";
import visible from "../../assets/password_open.svg";
import noVisible from "../../assets/password.svg";

function SignUpPage() {
  let history = useHistory();
  const [visiblePassword, setVisiblePassword] = useState(false);
  const [visibleConfirmedPassword, setVisibleConfirmedPassword] = useState(
    false
  );
  const [form, handleFormChange] = useForm({
    name: "",
    email: "",
    cpf: "",
    password: "",
    confirmPassword: "",
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const response = await signup(form);
    if (response.token) {
      localStorage.setItem("rappi4", JSON.stringify(response));
      history.replace("/signup-address");
    } else {
      window.alert(response.message);
    }
  };

  const handleClickShowPassword = (passwordField) => {
    if (passwordField === "PASSWORD") {
      setVisiblePassword(!visiblePassword);
    } else if (passwordField === "CONFIRM_PASSWORD") {
      setVisibleConfirmedPassword(!visibleConfirmedPassword);
    }
  };

  return (
    <PageContainer>
      <Logo src={logo} alt="rappi4 logo" />
      <SignUpMainContent>
        <SignUpTittle>Cadastrar</SignUpTittle>
        <form onSubmit={handleFormSubmit}>
          <SignUpInputBorder>
            <label htmlFor="name">Nome*</label>
            <input
              onChange={handleFormChange}
              id="name"
              name="name"
              value={form.name}
              type="text"
              placeholder="Nome e Sobrenome"
              required
            />
          </SignUpInputBorder>
          <SignUpInputBorder>
            <label htmlFor="email">E-mail*</label>
            <input
              onChange={handleFormChange}
              id="email"
              name="email"
              value={form.email}
              type="email"
              placeholder="email@email.com"
              required
            />
          </SignUpInputBorder>
          <SignUpInputBorder>
            <label htmlFor="cpf">CPF*</label>
            <input
              onChange={handleFormChange}
              id="cpf"
              name="cpf"
              value={form.cpf}
              type="text"
              placeholder="000.000.000-00"
              required
            />
          </SignUpInputBorder>
          <SignUpInputBorder>
            <label htmlFor="password">Senha*</label>
            <input
              onChange={handleFormChange}
              id="password"
              name="password"
              value={form.password}
              type={visiblePassword ? "text" : "password"}
              placeholder="Mínimo 6 caracteres"
              required
            />
            <ShowPasswordIcon
              onClick={() => handleClickShowPassword("PASSWORD")}
              src={visiblePassword ? noVisible : visible}
            />
          </SignUpInputBorder>
          <SignUpInputBorder>
            <label htmlFor="confirmPassword">Confirmar*</label>
            <input
              onChange={handleFormChange}
              id="confirmPassword"
              name="confirmPassword"
              value={form.confirmPassword}
              type={visibleConfirmedPassword ? "text" : "password"}
              placeholder="Confirme a senha anterior"
              required
            />
            <ShowPasswordIcon
              onClick={() => handleClickShowPassword("CONFIRM_PASSWORD")}
              src={visibleConfirmedPassword ? noVisible : visible}
            />
          </SignUpInputBorder>
          <Button type="submit">Criar</Button>
        </form>
      </SignUpMainContent>
    </PageContainer>
  );
}

export default SignUpPage;
