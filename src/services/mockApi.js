export function getMachines() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, name: "Prensa A1", status: "running"},
        { id: 2, name: "Torno CNC 02", status: "idle"},
        { id: 3, name: "Robô Soldagem 3", status: "error"},
        { id: 4, name: "Esteira L1", status: "running"},
        { id: 5, name: "Injetora Plástica 5", status: "running"},
        { id: 6, name: "Fresadora CNC 07", status: "idle"},
        { id: 7, name: "Cortadora Laser X2", status: "error"},
        { id: 8, name: "Misturador Industrial M3", status: "running"},
        { id: 9,  name: "Compressores Centrais C1", status: "running"},
        { id: 10, name: "Forno Térmico F2", status: "idle"},
        { id: 11, name: "Linha de Montagem L3", status: "running"},
        { id: 12, name: "Sistema Hidráulico H1", status: "error" }

      ])
    }, 500)
  })
}

export function getMachineReadings(machineId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        machineId,
        temperature: (60 + Math.random() * 20).toFixed(1),
        vibration: (0.5 + Math.random()).toFixed(2),
        timestamp: new Date().toISOString()
      })
    }, 500)
  })
}
