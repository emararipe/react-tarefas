import React from "react"
import Botao from "../botao"
import style from  "./Formulario.module.scss"
import { Itarefa } from "../../types/tarefa"
import { v4 as uuidv4 } from "uuid"


class Formulario extends React.Component<{setTarefas: React.Dispatch<React.SetStateAction<Itarefa[]>>}> {
  state = {
    tarefa: "",
    tempo: "00:00"
  }

  adicionaTarefa(evento: React.FormEvent<HTMLFormElement>){
    evento.preventDefault()
    this.props.setTarefas( tarefasInciais => [...tarefasInciais, {
      ...this.state, 
      selecionado: false, 
      completado: false,
      id: uuidv4()
    }])
    this.state = {
      tarefa: "",
      tempo: "00:00"
    }
  }

  render() {
    return (
      <form className={style.novaTarefa} onSubmit={this.adicionaTarefa.bind(this)} >
        <div className={style.inputContainer}>
          <label htmlFor="tarefa">Insira sua tarefa:</label>  
          <input type="text" 
            name="tarefa" 
            id="tarefa" 
            value={this.state.tarefa} 
            onChange={evento => this.setState({...this.state, tarefa: evento.target.value})} 
            placeholder="O que você deseja realizar." 
            required 
          />
        </div>

        <div className={style.inputContainer}>
          <label htmlFor="tempo"></label>
          <input type="time" 
            name="tempo" 
            id="tempo" 
            value={this.state.tempo} 
            onChange={evento => this.setState({...this.state, tempo: evento.target.value})} 
            min="00:00:00" 
            max="01:30:00" 
            required 
          />
        </div>
        <Botao type="submit">Adicionar</Botao>
      </form>
    )
  }
}

export default Formulario