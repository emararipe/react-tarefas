import style from "./Lista.module.scss"
import Item from "./item"
import { Itarefa } from "../../types/tarefa"

interface Props {
  tarefas: Itarefa[],
  selecionaTarefa: (TarefaSelecionada: Itarefa) => void
}

function Lista({tarefas, selecionaTarefa}: Props ) {
  
  return (
    <aside className={style.listaTarefas}>
      <h2>Estudos do Dia:</h2>
      <ul>
        {tarefas.map(item => (
          <Item 
            key={String(item.id)} {...item}
            selecionaTarefa={selecionaTarefa}
          />
        ))}
      </ul>
    </aside>
  )
}

export default Lista

