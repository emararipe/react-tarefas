import React from "react"
import { Botao } from "../botao"
import style from  "./Formulario.module.scss"


class Formulario extends React.Component {
  render() {
    return (
      <form className={style.novaTarefa}>
        <div className={style.inputContainer}>
          <label htmlFor="tarefa">Insira sua tarefa:</label>
          <input type="text" name="tarefa" id="tarefa" placeholder="O que você deseja realizar." required />
        </div>

        <div className={style.inputContainer}>
          <label htmlFor="tempo"></label>
          <input type="time" name="tempo" id="tempo" min="00:00:00" max="01:30:00" required />
        </div>
        <Botao />
      </form>
    )
  }
}

export default Formulario