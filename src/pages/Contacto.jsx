import { faFaceFrown, faFaceSmileBeam } from '@fortawesome/free-regular-svg-icons'
import './Contacto.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import FormContacto from '../components/FormContacto'

const Contacto = () => {
  return (
    <main>
    <section className="section-contact">
      <header className="contact-header">
        <h1>Hola!</h1>
        <p>Ponte en contacto con nosotros!</p>
      </header>

      <FormContacto />

      <div className="final-form-container">
        <form action="#" className="final-form-container__form">
          <h2 className="final-form-container__title">¿Te resultó útil la información?</h2>
          <div className="final-form-container__icon-container">
            <label htmlFor="positivo" className="final-form-container__icono"><FontAwesomeIcon icon={faFaceSmileBeam} /></label>
            <input type="radio" name="opinion" id="positivo" className="final-form-container__input" value="positivo" />
            <label htmlFor="negativo" className="final-form-container__icono"><FontAwesomeIcon icon={faFaceFrown} /></label>
            <input type="radio" name="opinion" id="negativo" className="final-form-container__input" value="negativo" />
          </div>
            <input type="submit" className="final-form-container__submit" />
        </form>
      </div>

    </section>
  </main>
  )
}

export default Contacto