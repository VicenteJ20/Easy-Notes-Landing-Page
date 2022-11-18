import { GenericHeader } from './GenericHeader'
import featuresJson from '../json/featuresHome.json'
import '../styles/featuresHome.css'

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className='FeatureCard'>
      <header>
        <img src={icon} alt='' />
      </header>
      <div className='title'>
        <h3>{title}</h3>
      </div>
      <div className='description'>
        <p>{description}</p>
      </div>
    </div>
  )
}

export const FeaturesHome = () => {
  function getUrl (folder, img) {
    return String(new URL(`../assets/${folder}/${img}`, import.meta.url).href)
  }

  return (
    <div className='FeaturesHome'>
      <GenericHeader title='¿Qué puedo hacer con EasyNotes?' description='Con EasyNotes puedes crear notas, recordatorios, recibir notificaciones. Utilizando nuestro servicio para organizar tu vida personal y laboral puedes sacar tu máximo potencial y disfrutar cada minuto de tu tiempo libre.' />
      <div className='grid-features'>
        {
          featuresJson.map((x, index) => <FeatureCard key={index} icon={getUrl('featureshome', x.iconName)} title={x.title} description={x.description} />)
        }
      </div>
    </div>
  )
}
