import './Navbar.css'

function Navbar({telaAtiva, onNavegar}) {
    return (
        <nav className='navbar'>
            <h1 className='navbar-logo'>Clinica API</h1>
            <ul className='navbar-links'>
                <li className={telaAtiva === 'pacientes' ? 'ativo' : ''} onClick={() => onNavegar('pacientes')}>Pacientes</li>
                <li className={telaAtiva === 'medicos' ? 'ativo' : ''} onClick={() => onNavegar('medicos')}>Medicos</li>
                <li className={telaAtiva === 'consultas' ? 'ativo' : ''} onClick={() => onNavegar('consultas')}>Consultas</li>
            </ul>
        </nav>
    )
}

export default Navbar