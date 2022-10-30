import React, { Component } from 'react'
import { Outlet} from "react-router-dom"

import Navegacion from './Navegacion'

export default class Tablero extends Component {
  render() {
    return (
      <div>
        <Navegacion></Navegacion>
        <Outlet></Outlet>
      </div>
    )
  }
}
