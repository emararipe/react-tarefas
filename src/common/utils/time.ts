export function tempoParaSeegundos(tempo: String){
  const [horas ="0", minutos ="0", segundos ="0"]= tempo.split(":")
  const horaEmSegundos = Number(horas)*3600
  const minutosEmSegundos = Number(minutos)*60
  return (horaEmSegundos + minutosEmSegundos + Number(segundos))
}

