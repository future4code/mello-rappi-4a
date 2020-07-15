import React from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

import useForm from "../../hooks/useForm";

import ArrowBack from "./../../assets/arrow_back.svg";

import {
  Button,
  InputBorder,
  EditPagesForm,
  GoBack,
} from "./../../styles/forms";

const baseUrl = "https://us-central1-missao-newton.cloudfunctions.net/rappi4A";

function EditProfilePage() {
  let history = useHistory();
  const [form, handleFormChange] = useForm({ name: "", email: "", cpf: "" });

  const goToProfilePage = () => {
    history.push("/profile");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const token = localStorage.getItem("token");

    const axiosConfig = {
      headers: {
        Authorization: token,
      },
    };

    try {
      const response = await axios.put(`${baseUrl}/profile`, form, axiosConfig);
      console.log(response);
      alert("Dados alterados com sucesso");
    } catch (error) {
      console.log(error);
      alert("Não foi possível alterar");
    }
  };

  return (
    <div>
      <GoBack>
        <img src={ArrowBack} alt={"Voltar"} onClick={goToProfilePage} />
        <span>Editar</span>
      </GoBack>

      <EditPagesForm onSubmit={handleSubmit}>
        <InputBorder>
          <label htmlFor="name">Nome</label>
          <input
            required
            name="name"
            value={form.name}
            onChange={handleFormChange}
            id="name"
            type="text"
            placeholder="Nome"
          />
        </InputBorder>

        <InputBorder>
          <label htmlFor="email">E-mail</label>
          <input
            required
            name="email"
            value={form.email}
            onChange={handleFormChange}
            id="email"
            type="email"
            placeholder="E-mail"
          />
        </InputBorder>

        <InputBorder>
          <label htmlFor="cpf">CPF</label>
          <input
            required
            name="cpf"
            value={form.cpf}
            onChange={handleFormChange}
            id="cpf"
            type="number"
            placeholder="CPF"
          />
        </InputBorder>

        <Button>Salvar</Button>
      </EditPagesForm>
    </div>
  );
}

export default EditProfilePage;
