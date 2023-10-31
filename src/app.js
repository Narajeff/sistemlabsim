import UI from "./UI";
import express from "express";
import api from "./api";
const app = express();
app.use("/api/v1", api);

document.addEventListener("DOMContentLoaded", () => {
  const ui = new UI();
  ui.renderReserva();
});

document.getElementById("form-group").addEventListener("submit", (e) => {
  const title = document.getElementById("docente").value;
  const materia = document.getElementById("materia").value;
  const aula = document.getElementById("aula").value;
  const hora = document.getElementById("hora").value;

  const formData = new FormData();

  formData.append("docente", docente);
  formData.append("materia", materia);
  formData.append("aula", aula);
  formData.append("hora", hora);

  const reservaService = new ReservaService();

  console.log(title, materia);

  e.preventDefault();
});
export default app;
