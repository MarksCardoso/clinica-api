import { useState } from 'react'
import PacienteList from './components/PacienteList'
import Navbar from './components/Navbar'
import MedicoList from './components/MedicoList'
import ConsultaList from './components/ConsultaList'

function App() {
  const [tela, setTela] = useState('pacientes')

  return (
    <div>
      <Navbar telaAtiva={tela} onNavegar= {setTela}/>
      {tela == 'pacientes' && <PacienteList />}
      {tela == 'medicos' && <MedicoList />}
      {tela == 'consultas' && <ConsultaList />}

    </div>
  )
}

export default App