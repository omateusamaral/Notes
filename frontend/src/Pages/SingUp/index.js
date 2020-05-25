import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import register from "../../assets/register.png";
import "./style.css";
import api from "../../services/api";
export default function Singup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  async function handleRegister(event) {
    event.preventDefault();

    const dados = {
      name,
      email,
      password,
    };
    try {
      const response = await api.post("users", dados);
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
        <form onSubmit={handleRegister}>
          <h1>Cadastro</h1>
          <p>casdrata-se e tenha acesso a nossa plataforma.</p>
          <input
            placeholder="Seu nome"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Seu melhor E-mail"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <input
            type="password"
            placeholder="Sua senha"
            required
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <button type="submit" className="btn">
            Cadastrar-se
          </button>
        </form>
      </div>
    </>
  );
}
