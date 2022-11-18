import '../styles/GenericHeader.css'

export const GenericHeader = ({ title, description }) => {
  return (
    <header className='GenericHeader'>
      <h2>{title}</h2>
      <p>{description}</p>
    </header>
  )
}
