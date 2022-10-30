import React, { Component } from "react";

import { Link } from "react-router-dom";

export default class InicioSesion extends Component {
  render() {
    return (
      <div id="card_sesion">
        <h1>Inicio sesión</h1>
        <div className="inp">
          <label className="lbl_cmp">Usuario:</label>
          <input id="usuario" type="text" placeholder="Usuario"></input>
          <label className="error_mensaje" id="error_usuario"></label>
        </div>
        <div className="inp">
          <label className="lbl_cmp">Contraseña:</label>
          <input
            id="contrasenia"
            type="password"
            placeholder="Contraseña"
          ></input>
          <label className="error_mensaje" id="error_contrasenia"></label>
        </div>
        <button type="submit" id="button">
          <Link to="/tablero">Iniciar Sesion</Link>
        </button>
      </div>
    );
  }
}
