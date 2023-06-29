import { useState } from 'react';
import Formulario  from '../components/formulario';
import Lista from '../components/lista';
import style from './style.module.scss'
import Cronometro from '../components/cronometro';
import { Itarefa } from '../types/tarefa';

function App() {
  const [tarefas, setTarefas] = useState<Itarefa[] | []>([])
  const [selecionado, setSelecionado] = useState<Itarefa>()

  function selecionaTarefa(tarefaSelecionada: Itarefa){
    setSelecionado(tarefaSelecionada)
    setTarefas(tarefasAnteriores => tarefasAnteriores.map(
      tarefa => ({ ...tarefa, selecionado: tarefa.id === tarefaSelecionada.id ? true : false})
    ))
  }

  function finalizaTarefa(){
    if(selecionado){
      setSelecionado(undefined)
      setTarefas(tarefasAnteriores =>tarefasAnteriores.map(tarefa => {
        if(tarefa.id === selecionado.id){
          return{
            ...tarefa,
            selecionado: false,
            completado: false,
          }
        }
        return tarefa
      }))
    }
  }

  return (
    <div className={style.AppStyle}>
      <Formulario setTarefas={setTarefas}/>
      <Lista tarefas={tarefas} selecionaTarefa={selecionaTarefa} />
      <Cronometro selecionado={selecionado} finalizaTarefa={finalizaTarefa} />
    </div>
  );
}

export default App;

