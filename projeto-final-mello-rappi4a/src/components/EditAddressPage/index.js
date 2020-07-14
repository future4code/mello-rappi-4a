import React from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

import useForm from "../../hooks/useForm";

import { Title, Form } from "./styles";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IlM3Zjg0RUY4dU11Z29oZ0JVa3gyIiwibmFtZSI6IkNhbWlsYSIsImVtYWlsIjoiY2FtaWxhLm1pcmFuZGEubW91cmFAZ21haWwuY29tIiwiY3BmIjoiNDYzLjIzOS4zMDgtODkiLCJoYXNBZGRyZXNzIjp0cnVlLCJhZGRyZXNzIjoiUi4gUGVpeG90byBHb21pZGUsIDI4MSwgNzcgLSBKZC4gUGF1bGlzdGEiLCJpYXQiOjE1OTQ2Njk3NjJ9.6FxaW6pRsbM1fR04PllzKZXFPJT3HvRfg_7gjYV4msg";

const baseUrl = "https://us-central1-missao-newton.cloudfunctions.net/rappi4A";

function EditAddressPage() {
  let history = useHistory();

  const goToProfilePage = () => {
    history.push("/profile");
  };

  const [form, handleFormChange] = useForm({
    street: "",
    number: "",
    neighbourhood: "",
    city: "",
    state: "",
    complement: "",
  });

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

    goToProfilePage();
  };

  return (
    <div>
      <Title>
        <p>Endereço</p>
      </Title>
      <hr />

      <Form onSubmit={handleSubmit}>
        <label htmlFor="street">Logradouro*</label>
        <input
          required
          name="street"
          value={form.street}
          onChange={handleFormChange}
          id="street"
          type="text"
          placeholder="Rua"
        />

        <label htmlFor="number">Número*</label>
        <input
          required
          name="number"
          value={form.number}
          onChange={handleFormChange}
          id="number"
          type="number"
          placeholder="Número"
        />

        <label htmlFor="complement">Complemento</label>
        <input
          name="complement"
          value={form.complement}
          onChange={handleFormChange}
          id="complement"
          type="text"
          placeholder="Apto./Bloco"
        />

        <label htmlFor="neighbourhood">Bairro*</label>
        <input
          required
          name="neighbourhood"
          value={form.neighbourhood}
          onChange={handleFormChange}
          id="neighbourhood"
          type="text"
          placeholder="Bairro"
        />

        <label htmlFor="city">Cidade*</label>
        <input
          required
          name="city"
          value={form.city}
          onChange={handleFormChange}
          id="city"
          type="text"
          placeholder="Cidade"
        />

        <label htmlFor="state">Estado*</label>
        <input
          required
          name="state"
          value={form.state}
          onChange={handleFormChange}
          id="state"
          type="text"
          placeholder="Estado"
        />

        <button>Salvar</button>
      </Form>
    </div>
  );
}

export default EditAddressPage;
