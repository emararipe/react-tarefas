import style from "./Relogio.module.scss"

interface Props {
  tempo: number | undefined
}

function Relogio({ tempo = 0 } : Props ) {
  const minutos = Math.floor(tempo/60)
  const segundos = tempo % 60 // o resto nunca vai ser >= a 60
  const [dezenaMinuto, unidadeMinuto] = String(minutos).padStart(2, '0')
  const [dezenaSegundo, unidadeSegundo] = String(segundos).padStart(2, '0')

  return (
    <>
      <span className={style.relogioNumero}>{dezenaMinuto}</span>
      <span className={style.relogioNumero}>{unidadeMinuto}</span>
      <span className={style.relogioDivisao}>:</span>
      <span className={style.relogioNumero}>{dezenaSegundo}</span>
      <span className={style.relogioNumero}>{unidadeSegundo}</span>
    </>
  )
}

export default Relogio

