import { useState, useEffect } from 'react';
import Botao from '../botao'
import Relogio from './relogio'
import style from "./Cronometro.module.scss"
import { Itarefa } from '../../types/tarefa'
import { tempoParaSeegundos } from '../../common/utils/time';

interface Props {
  selecionado: Itarefa | undefined
  finalizaTarefa: () => void
}

function Cronometro({ selecionado, finalizaTarefa }: Props) {
  const [tempo, setTempo] = useState<number>()
  useEffect(() => {
    if (selecionado?.tempo) {
      setTempo(tempoParaSeegundos(selecionado.tempo))
    }
  }, [selecionado])

  function regressiva(contador: number = 0) {
    setTimeout(() => {
      if (contador > 0) {
        setTempo(contador - 1)
        return regressiva(contador - 1)
      }
      finalizaTarefa()
    }, 1000)
  }

  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
      <div className={style.relogioWrapper}>
        <Relogio tempo={tempo} />
      </div>
      <Botao onClick={() => regressiva(tempo)}>Começar!</Botao>
    </div>
  )
}

export default Cronometro

