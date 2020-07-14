import React from "react";
import { useHistory } from "react-router-dom";
import useForm from "../../hooks/useForm"
import { signup } from "../../functions/axios";

function SignUpPage() {
  let history = useHistory();
  const [form, handleFormChange] = useForm({
      name: "",
      email: "",
      cpf: "",
      password: "",
      confirmPassword: ""
  })

  const handleFormSubmit = async (event) => {
      event.preventDefault()
      const response = await signup(form)
      if (response.token) {
          localStorage.setItem("rappi4", JSON.stringify(response))
          history.push("/feed")
      } else {
          window.alert(response.message)
      }
  }

  const goToSignUpAddressPage = () => {
    history.push("/signup-address");
  };
  return (
    <div>
      Cadastrar
      <form onSubmit={handleFormSubmit}>
          <label htmlFor="name">Nome</label>
          <input 
            onChange={handleFormChange}
            id="name" 
            name="name"
            value={form.name}
            type="text"
            placeholder="Nome e Sobrenome" 
          />
          <label htmlFor="email">E-mail</label>
          <input 
            onChange={handleFormChange}
            id="email" 
            name="email"
            value={form.email}
            type="email"
            placeholder="email@email.com" 
          />
          <label htmlFor="cpf">CPF</label>
          <input 
            onChange={handleFormChange}
            id="cpf" 
            name="cpf"
            value={form.cpf}
            type="text"
            placeholder="000.000.000-00" 
          />
          <label htmlFor="password">Senha</label>
          <input 
            onChange={handleFormChange}
            id="password" 
            name="password"
            value={form.email}
            type="password"
            placeholder="Mínimo 6 caracteres" 
          />
          <label htmlFor="confirmPassword">Confirmar</label>
          <input 
            onChange={handleFormChange}
            id="confirmPassword" 
            name="confirmPassword"
            value={form.email}
            type="password"
            placeholder="Confirme a senha anterior" 
          />
          <button type="submit">Criar</button>
        </form>  
    </div>
  );
}

export default SignUpPage;
