import React from "react";
import axios from "axios";

import useForm from "../../hooks/useForm";

import { EditProfileTitle, EditProfileForm } from "./styles";

const baseUrl = "https://us-central1-missao-newton.cloudfunctions.net/rappi4A";

function EditProfilePage() {
  const [form, handleFormChange] = useForm({ name: "", email: "", cpf: "" });

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
      <EditProfileTitle>
        <p>Editar</p>
      </EditProfileTitle>
      <hr />

      <EditProfileForm onSubmit={handleSubmit}>
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

        <button>Salvar</button>
      </EditProfileForm>
    </div>
  );
}

export default EditProfilePage;
