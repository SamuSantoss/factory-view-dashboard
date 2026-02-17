import { useState, useEffect } from "react"
import { getMachines } from "./services/mockApi"
import MachineList from "./components/MachineList"
import MachineDetails from "./components/MachineDetails"
import FilterBar from "./components/FilterBar"

function App() {
  const [machines, setMachines] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const [selectedMachineId, setSelectedMachineId] = useState(null)
  const [filter, setFilter] = useState("all")
  const selectedMachine = machines.find(
  (machine) => machine.id === selectedMachineId
)


  useEffect(() => {
    getMachines()
      .then((data) => {
        setMachines(data)
      })
      .catch(() => {
        setError("Erro ao carregar máquinas")
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  return (
  <div className="app-container">
    <h1>FactoryView</h1>

    <FilterBar filter={filter} setFilter={setFilter} />

    <div className="dashboard">
      <div className="panel">
        <MachineList
          machines={machines}
          loading={loading}
          error={error}
          onSelect={setSelectedMachineId}
          filter={filter}
          selectedMachineId={selectedMachineId}
/>

      </div>

      <div className="panel">
        <MachineDetails machineId={selectedMachineId} 
        machine={selectedMachine}
        />
      </div>
    </div>
  </div>
)

}

export default App
