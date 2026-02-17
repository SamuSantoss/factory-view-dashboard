import { useEffect, useState } from "react"
import { getMachineReadings } from "../services/mockApi"
import StatusBadge from "./StatusBadge"


function MachineDetails({ machineId, machine}) {
  const [readings, setReadings] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!machineId) return

    let intervalId

    const fetchData = () => {
      setLoading(true)
      setError(null)

      getMachineReadings(machineId)
        .then((data) => {
          setReadings(data)
        })
        .catch(() => {
          setError("Erro ao carregar leituras")
        })
        .finally(() => {
          setLoading(false)
        })
    }

    fetchData() 

    intervalId = setInterval(fetchData, 5000)

    return () => {
      clearInterval(intervalId)
    }
  }, [machineId])

  if (!machineId) return <p>Selecione uma máquina</p>

  if (loading && !readings) return <p>Carregando leituras...</p>

  if (error) return <p>{error}</p>

  return (
    <div>
      <h2>Leituras</h2>
      <h3>{machine?.name}</h3>
      
      
      {readings && (
      <div className="readings">
        <div className="reading">
        <span>Temperatura:</span>
        <strong>{readings.temperature} °C</strong>
        </div>

        <div className="reading">
        <span>Vibração:</span>
        <strong>{readings.vibration} mm/s</strong>
        </div>

        <div className="reading">
        <span>Última atualização:</span>
        <strong>{new Date(readings.timestamp).toLocaleTimeString()}</strong>
        </div>

      </div>

      )}
    </div>
  )
}

export default MachineDetails
