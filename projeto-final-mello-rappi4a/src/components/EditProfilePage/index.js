import React from "react";
import axios from "axios";

import useForm from "../../hooks/useForm";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IlM3Zjg0RUY4dU11Z29oZ0JVa3gyIiwibmFtZSI6IkNhbWlsYSIsImVtYWlsIjoiY2FtaWxhLm1pcmFuZGEubW91cmFAZ21haWwuY29tIiwiY3BmIjoiNDYzLjIzOS4zMDgtODkiLCJoYXNBZGRyZXNzIjp0cnVlLCJhZGRyZXNzIjoiUi4gUGVpeG90byBHb21pZGUsIDI4MSwgNzcgLSBKZC4gUGF1bGlzdGEiLCJpYXQiOjE1OTQ2Njk3NjJ9.6FxaW6pRsbM1fR04PllzKZXFPJT3HvRfg_7gjYV4msg";

const baseUrl = "https://us-central1-missao-newton.cloudfunctions.net/rappi4A";

function EditProfilePage() {
  const [form, handleFormChange] = useForm({ name: "", email: "", cpf: "" });

  const handleSubmit = async (event) => {
    event.preventDefault();

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
      Editar
      <form onSubmit={handleSubmit}>
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
      </form>
    </div>
  );
}

export default EditProfilePage;
