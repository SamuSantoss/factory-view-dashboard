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
          {machine.name} - <StatusBadge status={machine.status} />
          
        </li>
      ))}
    </ul>
  )
}


export default MachineList
