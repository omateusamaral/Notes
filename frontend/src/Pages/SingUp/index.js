import React from "react";
import { Link, useHistory } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import api from "../../services/api";
import register from "../../assets/register.png";
import { FiArrowLeft } from "react-icons/fi";
import "./style.css";

const initValues = {
  name: "",
  email: "",
  password: "",
};
const validationSchema = Yup.object({
  name: Yup.string().required("Campo obrigatório!"),
  email: Yup.string().email("Invalid E-mail").required("Campo obrigatório!"),
  password: Yup.string().required("Campo obrigatório!").min("6"),
});
export default function Singup() {
  const history = useHistory();

  async function handleRegister(values) {
    try {
      const response = await api.post("users", values);
      const { data } = response;

      if (data) {
        history.push("/");
      }
    } catch (err) {
      alert("Erro Ao criar usuário. verifique os dados digitados.");
    }
  }

  return (
    <>
      <div className="register-container">
        <div className="linktop">
          <Link className="backlink" to="/">
            <FiArrowLeft size={35} color="#000" />
          </Link>
        </div>

        <img src={register} alt="Register" />
        <Formik
          initialValues={initValues}
          validationSchema={validationSchema}
          onSubmit={handleRegister}
        >
          <Form>
            <h1>Cadastro</h1>
            <p>cadastre-se e tenha acesso a nossa plataforma.</p>
            <Field
              placeholder="Seu nome"
              className="inputRegister"
              name="name"
            />
            <ErrorMessage name="name" />
            <Field
              type="email"
              className="inputRegister"
              placeholder="Seu melhor E-mail"
              name="email"
            />
            <ErrorMessage name="email" />

            <Field
              type="password"
              className="inputRegister"
              placeholder="Sua senha"
              name="password"
            />
            <ErrorMessage name="password" />
            <br />
            <button type="submit" className="btn">
              Cadastrar-se
            </button>
          </Form>
        </Formik>
      </div>
    </>
  );
}
