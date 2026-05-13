import { useState, useEffect } from 'react'
import './MedicoList.css'

function MedicoList() {
  const [medicos, setMedicos] = useState([])
  const [loading, setLoading] = useState(true)
  const [erro, setErro] = useState(null)

  useEffect(() => {
    fetch('http://localhost:8080/api/medicos')
      .then(response => {
        if (!response.ok){
          throw new Error('Erro ao buscar medicos.')
        }
        return response.json()
      })
      .then(data => {
        setMedicos(data)
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
    <div className='medico-container'>

      <h2>Medicos</h2>
      <p className='medico-total'>Total: {medicos.length}</p>
      
      <ul className='medico-lista'>
        {medicos.map(medico => (
            <li key={medico.id} className='medico-item'>
                {medico.nome} - {medico.crm}
            </li>
        ))}
      </ul>

    </div>
  )
}

export default MedicoList