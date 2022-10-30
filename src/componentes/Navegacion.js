import React, { Component } from 'react'

import { Link } from "react-router-dom";

export default class Navegacion extends Component {
  render() {
    return (
        <nav className="menu">
        <ul>
            <li><Link to="inicio">Inicio</Link></li>
            <li><Link to="productos">Productos</Link></li>
            <li><Link to="/">Salir</Link></li>
        </ul>
    </nav>
    )
  }
}
