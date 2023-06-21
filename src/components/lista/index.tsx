import style from "./Lista.module.scss"
import Item from "./item"

function Lista() {
  const tarefas = [{
    "tarefa": "React",
    "tempo": "2:00:00"
  }, 
  {
    "tarefa": "Javascript",
    "tempo": "1:00:00" 
  },
  {
    "tarefa": "Typescript",
    "tempo": "3:00:00"     
  }]

  return (
    <aside className={style.listaTarefas}>
      <h2>Estudos do Dia:</h2>
      <ul>
        {tarefas.map((item, index) => (
          <Item tarefa={item.tarefa} tempo={item.tempo}/>
        ))}
      </ul>
    </aside>
  )
}

export default Lista

