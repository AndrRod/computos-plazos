import React, { useState } from "react";
import moment from "moment";
import diasInhabilesJson from "./diasInhabilesJson.json";

export default function LogicaComputos(props) {
  const [linea1, setLinea1] = useState("");
  const [linea2, setLinea2] = useState("");

  const onChangeLinea1 = function (evento) {
    setLinea1(evento.target.value);
  };
  const onChangeLinea2 = function (evento) {
    toString(setLinea2(evento.target.value));
  };

  const compPlazosDiasCorridos = (fechaInicial, diasAComputar) => {
    let fecha = moment(fechaInicial, "DD/MM/YYYY");
    for (let i = 1; i <= diasAComputar; i++) {
      fecha.add(1, "days").format("DD/MM/YYYY");
    }
    let parrafo = document.getElementById("resultado");
    parrafo.setAttribute("class", "alert alert-danger");
    if (fecha.format("DD/MM/YYYY") !== "Invalid date") {
      return parrafo.replaceChildren(
        `fecha inicial ${fechaInicial} más ${diasAComputar} días corridos = vencimiento del plazo: ` +
          fecha.format("DD/MM/YYYY")
      );
    }
    return parrafo.replaceChildren(
      `ERROR: Revea los datos ingresados por favor`
    );
  };
  const [fechaHabil, setFechaHabil] = useState("");
  const [cantDiasHab, setDiasHab] = useState("");
  const onChangeFechaHabil = function (evento) {
    setFechaHabil(evento.target.value);
  };
  const onChangeDiaHabil = function (evento) {
    toString(setDiasHab(evento.target.value));
  };

  let DIAS_INHABILES1 = diasInhabilesJson;

  const compPlazosDiasHabiles = (fechaInicial, diasAComputar) => {
    let dias = diasAComputar;
    let fecha = moment(fechaInicial, "DD/MM/YYYY");
    let parrafo = document.getElementById("resultado1");
    parrafo.setAttribute("class", "alert alert-danger");
    console.log(fecha, fecha.isoWeekday());
    for (let i = 1; i <= diasAComputar; i++) {
      console.log(fecha, fecha.isoWeekday());
      fecha.add(1, "days").format("DD/MM/YYYY");
      if (fecha.isoWeekday() === 6 || fecha.isoWeekday() === 7) {
        diasAComputar++;
      }
      DIAS_INHABILES1.forEach((n) => {
        if (n.fecha === fecha.format("DD/MM/YYYY")) diasAComputar++;
      });
    }

    if (fecha.format("DD/MM/YYYY") !== "Invalid date") {
      return parrafo.replaceChildren(
        `fecha inicial ${fechaInicial} más ${diasAComputar} días corridos o ${dias} habiles = `,
        fecha.format("DD/MM/YYYY")
      );
    }
    return parrafo.replaceChildren(
      `ERROR: Revea los datos ingresados por favor`
    );
  };
  return (
    <div class="container">
      <div className="App">
        <br />
        <br />
        <div class="row">
          <div class="col">
            <h1>
              Computo días <strong>CORRIDOS</strong>
            </h1>
            <br />
            <p className="parrafo">
              Escribe la fecha y cantidad de días para computar:
            </p>
            <input
              class="form-control form-control-lg"
              type="text"
              onChange={onChangeLinea1}
              type="text"
              placeholder="inserte fecha"
            />
            <br />
            <input
              class="form-control form-control-lg"
              type="text"
              onChange={onChangeLinea2}
              type="text"
              placeholder="inserte cantidad de días"
            />
            <br />
            <br />

            <button
              type="button"
              class="btn btn-outline-info"
              onClick={() => compPlazosDiasCorridos(linea1, linea2)}
            >
              computar plazo
            </button>

            <br />
            <br />

            <p id="resultado"></p>
          </div>
          <div class="col">
            <h1>
              Computo días <strong>HÁBILES</strong>
            </h1>
            <br />
            <p className="parrafo">
              Escribe la fecha y cantidad de días para computar:
            </p>
            <input
              class="form-control form-control-lg"
              type="text"
              onChange={onChangeFechaHabil}
              type="text"
              placeholder="inserte fecha"
            />
            <br />
            <input
              class="form-control form-control-lg"
              type="text"
              onChange={onChangeDiaHabil}
              type="text"
              placeholder="inserte cantidad de días"
            />
            <br />
            <br />

            <button
              type="button"
              class="btn btn-outline-info"
              onClick={() => compPlazosDiasHabiles(fechaHabil, cantDiasHab)}
            >
              computar plazo
            </button>

            <br />
            <br />

            <div id="resultado1"></div>

            <h4>Dias inhábiles:</h4>
            {props.children}
          </div>
        </div>
      </div>
      <br />
      <br />
      
    </div>
  );
}
