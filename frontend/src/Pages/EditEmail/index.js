import React from "react";
import { useHistory, Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import api from "../../services/api";
import "./style.css";
const initValues = {
  email: "",
};
const validationSchema = Yup.object({
  email: Yup.string().email("Invalid E-mail").required("Campo obrigatório!"),
});
export default function EditEmail() {
  const history = useHistory();
  const token = localStorage.getItem("token");
  async function handleUpdate(values) {
    try {
      const response = await api.put("users", values, {
        headers: {
          Authorization: token,
        },
      });
      const { data } = response;

      localStorage.setItem("email", response.data.email);
      if (data) {
        history.push("/account");
      }
    } catch (err) {
      alert("Erro Ao Editar usuário. verifique os dados digitados.");
    }
  }
  return (
    <>
      <Link className="backlink" to="/account">
        <FiArrowLeft size={35} color="#000" />
      </Link>
      <div className="email-container">
        <Formik
          initialValues={initValues}
          validationSchema={validationSchema}
          onSubmit={handleUpdate}
        >
          <Form>
            <h1>Atualizar E-mail</h1>
            <Field
              type="email"
              className="inputRegister"
              placeholder="digite o novo email"
              name="email"
            />
            <ErrorMessage name="email" />
            <br />
            <button type="submit" className="btn">
              Atualizar
            </button>
          </Form>
        </Formik>
      </div>
    </>
  );
}
