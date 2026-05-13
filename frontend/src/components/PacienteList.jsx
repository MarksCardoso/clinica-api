import { useState, useEffect } from 'react'
import './PacienteList.css'

function PacienteList() {
  const [pacientes, setPacientes] = useState([])
  const [loading, setLoading] = useState(true)
  const [erro, setErro] = useState(null)

  useEffect(() => {
    fetch('http://localhost:8080/api/pacientes')
      .then(response => {
        if (!response.ok){
          throw new Error('Erro ao buscar pacientes.')
        }
        return response.json()
      })
      .then(data => {
        setPacientes(data)
        setLoading(false)
      })
      .catch(error => {
        setErro(error.message)
        setLoading(false)
      })
  }, [])

  if (loading) return <p>Carregando...</p>
  if (erro) return <p>Erro: {erro}</p>

  return (
    <div className='paciente-container'>

      <h2>Pacientes</h2>
      <p className='paciente-total'>Total: {pacientes.length}</p>
      
      <ul className='paciente-lista'>
        {pacientes.map(paciente => (
            <li key={paciente.id} className='paciente-item'>
                {paciente.nome} - {paciente.email}
            </li>
        ))}
      </ul>

    </div>
  )
}

export default PacienteList