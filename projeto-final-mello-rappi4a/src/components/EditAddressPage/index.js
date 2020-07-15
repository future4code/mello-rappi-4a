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

  const token = localStorage.getItem("token");

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
      <GoBack>
        <img src={ArrowBack} alt={"Voltar"} onClick={goToProfilePage} />
        <span>Endereço</span>
      </GoBack>

      <EditPagesForm onSubmit={handleSubmit}>
        <InputBorder>
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
        </InputBorder>

        <InputBorder>
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
        </InputBorder>

        <InputBorder>
          <label htmlFor="complement">Complemento</label>
          <input
            name="complement"
            value={form.complement}
            onChange={handleFormChange}
            id="complement"
            type="text"
            placeholder="Apto./Bloco"
          />
        </InputBorder>

        <InputBorder>
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
        </InputBorder>

        <InputBorder>
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
        </InputBorder>

        <InputBorder>
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
        </InputBorder>

        <Button>Salvar</Button>
      </EditPagesForm>
    </div>
  );
}

export default EditAddressPage;
