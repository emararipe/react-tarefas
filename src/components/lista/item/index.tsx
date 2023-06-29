import { Itarefa } from "../../../types/tarefa"
import style from "./Item.module.scss"

interface Props extends Itarefa{
  selecionaTarefa: (TarefaSelecionada: Itarefa) => void
}

function Item({tarefa, tempo, selecionado, completado, id, selecionaTarefa}: Props) {
  return (
    <li className={`${style.item} ${selecionado? style.itemSelecionado :''}`} onClick={() => selecionaTarefa({tarefa, tempo, selecionado, completado, id})}>
      <h3> {tarefa} </h3>
      <p> {tempo} </p>
    </li>
  )
}

export default Item

