import React from "react";
import { useHistory, Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import api from "../../services/api";
import "./style.css";
const initValues = {
  email: "",
  oldPassword: "",
  password: "",
  confirmPassword: "",
};
const validationSchema = Yup.object({
  email: Yup.string().email("Invalid E-mail").required("Campo obrigatório!"),
  oldPassword: Yup.string().required("Campo obrigatório!").min("6"),
  password: Yup.string().required("Campo obrigatório!").min("6"),
  confirmPassword: Yup.string().required("Campo obrigatório!").min("6"),
});
export default function EditPassword() {
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
      <div className="password-container">
        <Formik
          initialValues={initValues}
          validationSchema={validationSchema}
          onSubmit={handleUpdate}
        >
          <Form>
            <h1>Atualizar Senha</h1>

            <Field
              type="email"
              className="inputRegister"
              placeholder="digite seu atual email"
              name="email"
            />
            <ErrorMessage name="email" />
            <br />
            <Field
              type="password"
              className="inputRegister"
              placeholder="digite sua senha atual"
              name="oldPassword"
            />
            <ErrorMessage name="oldPassword" />
            <br />
            <Field
              type="password"
              className="inputRegister"
              placeholder="digite sua nova senha"
              name="password"
            />
            <ErrorMessage name="password" />
            <br />

            <Field
              type="password"
              className="inputRegister"
              placeholder="confirme sua nova senha"
              name="confirmPassword"
            />
            <ErrorMessage name="confirmPassword" />
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
