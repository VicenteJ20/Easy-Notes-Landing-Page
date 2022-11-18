import '../styles/Home.css'
import imgHome from '../assets/Home-img.png'
import { Link } from 'react-router-dom'
import { FeaturesHome } from './FeaturesHome'

export function Home () {
  return (
    <>
      <div className='Home'>
        <div className='left-div'>
          <h1>Organízate en todo momento <br />y lugar. <br /><span className='color-highlight'>El límite lo pones tú.</span></h1>
          <p className='subtitle'>Crear notas, recibe notificaciones, agenda reuniones, y obtén acceso en cualquiera de tus dispositivos con nuestro servicio basado en la nube.</p>
          <p className='login-home-button'><Link to='/'>Acceder</Link></p>
        </div>
        <div className='right-div'>
          <img src={imgHome} alt='home-img' />
        </div>
      </div>
      <FeaturesHome />
    </>
  )
}
