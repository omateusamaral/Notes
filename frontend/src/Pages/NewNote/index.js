import React from "react";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as moment from "moment";
import * as Yup from "yup";
import { FiArrowLeft } from "react-icons/fi";
import "./style.css";

const initValues = {
  title: "",
  description: "",
  date: moment().format("DD/MM/YYYY"),
  time: moment().format("hh:mm"),
};
const validationSchema = Yup.object({
  title: Yup.string().required("Campo obrigatório!"),
  description: Yup.string().required("Campo obrigatório!"),
  date: Yup.string().required("Campo obrigatório"),
  time: Yup.string().required("campo obrigatório"),
});
export default function Newnote() {
  return (
    <div className="newnote-container">
      <header>
        <Link className="backlink" to="/dashboard">
          <FiArrowLeft size={35} color="#000" />
        </Link>
      </header>
      <Formik initialValues={initValues} validationSchema={validationSchema}>
        <Form>
          <h2>Crie um novo note</h2>
          <Field type="text" name="title" placeholder="Título do note" />
          <ErrorMessage name="title" />
          <Field
            type="text"
            name="description"
            placeholder="Descrição  do note"
          />

          <ErrorMessage name="description" />
          <Field type="text" name="date" placeholder="data de lembrete" />
          <ErrorMessage name="date" />

          <Field type="time" name="time" placeholder="data de lembrete" />
          <ErrorMessage name="time" />
          <button>Criar</button>
        </Form>
      </Formik>
    </div>
  );
}
