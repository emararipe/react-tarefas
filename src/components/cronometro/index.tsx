import React from 'react'
import { Botao } from '../botao'
import Relogio from './relogio'
import style from "./Cronometro.module.scss"

function Cronometro() {
  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
      <div className={style.relogioWrapper}>
        <Relogio/>
      </div>
      <Botao>Começar!</Botao>
    </div>
  )
}

export default Cronometro