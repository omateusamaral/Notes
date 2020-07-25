import React from "react";
import { Link, useHistory } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import api from "../../services/api";
import logo from "../../assets/logo.png";
import { FiLogIn, FiArrowRight } from "react-icons/fi";
import "./style.css";
import "./responsive.css";
const initialValues = {
  email: "",
  password: "",
};
const validationSchema = Yup.object({
  email: Yup.string().email("Invalid E-mail").required("Campo obrigatório!"),
  password: Yup.string().required("Campo obrigatório!").min("6"),
});
export default function Login() {
  const history = useHistory();

  async function handleLogin(values) {
    try {
      const response = await api.post("sessions", values);

      const { token } = response.data;
      if (token) {
        localStorage.setItem("token", `Bearer ${token}`);
        localStorage.setItem("email", response.data.user.email);
        localStorage.setItem("userName", response.data.user.name);
        history.push("/dashboard");
      }
    } catch (error) {
      alert("Dados não econtrado. Verifique o que foi digitado.");
    }
  }
  return (
    <>
      <div className="login-container">
        <section className="form">
          <img src={logo} alt="Notes" />
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleLogin}
          >
            <Form>
              <h1>
                Bem vindo,
                <br />
                <span> Faça seu login para continuar</span>
              </h1>
              <Field
                type="email"
                className="inputLogin"
                placeholder="E-mail"
                name="email"
              />
              <ErrorMessage name="email" />
              <br />
              <Field
                type="password"
                className="inputLogin"
                placeholder="Senha"
                name="password"
              />
              <ErrorMessage name="password" />
              <br />
              <button type="submit" className="btnLogin">
                Entrar <FiArrowRight size={20} color="#fff" />
              </button>
              <br />
              <Link className="LinkRegister" to="/singup">
                <FiLogIn size={16} color="#000" className="spaceFI" />
                Realizar cadastro
              </Link>
            </Form>
          </Formik>
        </section>
      </div>

      <p>
        Thanks for pngtree for provide the imagens of page login and register{" "}
        <br />
        logo png from pngtree.com
        <a href="https://pngtree.com/so/logo">logo png from pngtree.com</a>
        {"  "}
        <br />
        computer png from pngtree.com -{" "}
        <a href="https://pngtree.com/so/computer">
          computer png from pngtree.com
        </a>
      </p>
    </>
  );
}
