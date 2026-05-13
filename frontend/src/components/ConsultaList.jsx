import { useState, useEffect } from 'react'
import './ConsultaList.css'

function ConsultaList() {
  const [consultas, setConsultas] = useState([])
  const [loading, setLoading] = useState(true)
  const [erro, setErro] = useState(null)

  useEffect(() => {
    fetch('http://localhost:8080/api/consultas')
      .then(response => {
        if (!response.ok){
          throw new Error('Erro ao buscar consultas.')
        }
        return response.json()
      })
      .then(data => {
        setConsultas(data)
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
    <div className='consulta-container'>

      <h2>Consultas</h2>
      <p className='consulta-total'>Total: {consultas.length}</p>
      
      <ul className='consulta-lista'>
        {consultas.map(consulta => (
            <li key={consulta.id} className='consulta-item'>
                {consulta.pacienteNome} - {consulta.medicoNome} - {consulta.status} - {consulta.dataHora}
            </li>
        ))}
      </ul>

    </div>
  )
}

export default ConsultaList