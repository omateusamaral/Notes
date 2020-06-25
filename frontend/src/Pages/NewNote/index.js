import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import api from "../../services/api";
import { FiArrowLeft } from "react-icons/fi";
import "./style.css";

export default function Newnote() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [notify, setNotify] = useState("");

  const history = useHistory();
  const token = localStorage.getItem("token");

  async function handleNote(event) {
    event.preventDefault();
    const data = {
      title,
      description,
      notify,
    };

    try {
      await api.post("/users/notes", data, {
        headers: {
          Authorization: token,
        },
      });

      history.push("/dashboard");
    } catch (err) {
      alert("Erro Ao criar Note. verifique os dados digitados.");
    }
  }

  return (
    <div className="newnote-container">
      <header>
        <Link className="backlink" to="/dashboard">
          <FiArrowLeft size={35} color="#000" />
        </Link>
      </header>

      <form onSubmit={handleNote}>
        <h2>Crie um novo note</h2>
        <input
          name="title"
          placeholder="Título do note"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          required
        />

        <input
          name="description"
          placeholder="Descrição  do note"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          required
        />

        <input
          type="datetime-local"
          min="2020-06-26"
          name="date"
          value={notify}
          onChange={(event) => setNotify(event.target.value)}
          required
        />

        <button type="submit">Criar</button>
      </form>
    </div>
  );
}
