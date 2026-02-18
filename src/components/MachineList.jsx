import StatusBadge from "./StatusBadge"

function MachineList({ machines, loading, error, onSelect, filter, selectedMachineId }) {

  if (loading) return <p>Carregando máquinas...</p>
  if (error) return <p>{error}</p>

  const filteredMachines =
    filter === "all"
      ? machines
      : machines.filter((m) => m.status === filter)
      

  return (
    <ul>
      {filteredMachines.map((machine) => (
        <li
          key={machine.id}
          className={`machine-item 
            ${selectedMachineId === machine.id ? "selected" : ""}
          
          `}
          onClick={() => onSelect(machine.id)}
        >
          <div className="machine-row">
          <span className="machine-name">{machine.name}</span>
          <StatusBadge status={machine.status} />
          </div>
        </li>
      ))}
    </ul>
  )
}


export default MachineList
