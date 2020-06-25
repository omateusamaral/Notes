import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiPower, FiX } from "react-icons/fi";
import * as moment from "moment";
import api from "../../services/api";
import "./style.css";
import "./responsive.css";
export default function Dashboard() {
  const [notes, setNotes] = useState([]);
  const history = useHistory();
  const userName = localStorage.getItem("userName");
  const token = localStorage.getItem("token");

  useEffect(() => {
    api
      .get("/users/notes", {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        setNotes(res.data);
      });
  }, [token]);

  async function handleDeleteNote(id) {
    try {
      await api.delete(`users/${id}/notes`, {
        headers: {
          Authorization: token,
        },
      });
      setNotes(notes.filter((note) => note.id !== id));
    } catch (error) {
      alert("erro ao deletar note");
    }
  }
  function handleLogout() {
    localStorage.removeItem("userName");
    history.push("/");
  }
  return (
    <div className="dashboard-container">
      <header>
        <h4>Bem vindo, </h4>
        <span>{userName}</span>
        <Link to="/createnote" className="button">
          Criar um novo Note
        </Link>
        <button onClick={handleLogout} type="button">
          <FiPower size={18} color="#f28500" />
        </button>
      </header>
      <h1>Seus Notes</h1>
      <ul>
        {notes.map((note) => (
          <li key={note.id}>
            <p>{note.title}</p>
            <strong>{note.description}</strong>
            <p>Data: {moment(note.notify).format("DD/MM/YYYY HH:mm")}</p>

            <button onClick={() => handleDeleteNote(note.id)}>
              <FiX size={20} color="#E02041" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
