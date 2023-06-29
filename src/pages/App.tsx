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

  return (
    <div className={style.AppStyle}>
      <Formulario setTarefas={setTarefas}/>
      <Lista tarefas={tarefas} selecionaTarefa={selecionaTarefa} />
      <Cronometro selecionado={selecionado} />
    </div>
  );
}

export default App;

