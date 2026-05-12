import { useState, useEffect } from 'react'

function PacienteList() {
  const [pacientes, setPacientes] = useState([])

  useEffect(() => {
    fetch('http://localhost:8080/api/pacientes')
      .then(response => response.json())
      .then(data => setPacientes(data))
  }, [])

  return (
    <div>
      <h2>Pacientes</h2>
      <p>Total: {pacientes.length}</p>
      <ul>
        {pacientes.map(paciente => (
            <li key={paciente.id}>
                {paciente.nome} - {paciente.email}
            </li>
        ))}
      </ul>
    </div>
  )
}

export default PacienteList