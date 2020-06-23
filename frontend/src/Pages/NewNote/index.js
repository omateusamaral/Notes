import React from "react";

export default function Newnote() {
  return (
    <div className="newnote-container">
      <header>
        <button>Voltar</button>
        <h3>Crie um novo note</h3>
      </header>
      <form>
        <input type="text" name="title" placeholder="Título do note" />
        <input type="text" name="decription" placeholder="Descrição  do note" />
        <input type="date" name="notify" placeholder="data de lembrete" />
        <button>Criar</button>
      </form>
    </div>
  );
}
