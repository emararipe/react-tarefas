import { useState, useEffect } from 'react';
import Botao from '../botao'
import Relogio from './relogio'
import style from "./Cronometro.module.scss"
import { Itarefa } from '../../types/tarefa'
import { tempoParaSeegundos } from '../../common/utils/time';

interface Props {
  selecionado: Itarefa | undefined
}

function Cronometro({selecionado}: Props) {
  const [tempo, setTempo] = useState<number>()
  useEffect(() => {
    if(selecionado?.tempo){
      setTempo(tempoParaSeegundos(selecionado.tempo))
    }
  }, [selecionado])

  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
      <div className={style.relogioWrapper}>
        <Relogio tempo={tempo}/>
      </div>
      <Botao>Começar!</Botao>
    </div>
  )
}

export default Cronometro
