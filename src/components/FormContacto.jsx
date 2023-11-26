import './FormContacto.scss'
import { useFormContacto } from '../hooks/useFormContacto'
import { useContext } from 'react'
import ContactoContext from '../contexts/ContactoContext'

const formInicial = {
    id: null,
    motivo: '',
    nombre: '',
    mail: '',
    telefono: '',
    comentarios: ''
}

const FormContacto = () => {
    const [ form, setForm, handleChange] = useFormContacto(formInicial)
    const { crearClienteContext } = useContext(ContactoContext)


    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            console.log(form)
            await crearClienteContext(form)
        } catch (error) {
            console.error('Algo ocurrió en el handleSubmit', error)
        }

        handleReset()
    }

    const handleReset = () => {
        setForm(formInicial)
    }

  return (
    <>
        <div className="form-container">
        <form /* action="#" */ className="form-container__form" onSubmit={handleSubmit}>
          <label htmlFor="motivo" className="form-container__label">Motivo</label>
          <select name="motivo" id="motivo" className="form-container__select" value={form.motivo} onChange={handleChange}>
            <option value="" className="form-container__option" /* disabled selected hidden */>- Seleccionar - </option>
            <option value="cancelar-compra" className="form-container__option">Cancelar compra</option>
            <option value="cambios-devoluciones" className="form-container__option">Cambios y devoluciones</option>
            <option value="envio" className="form-container__option">Envío de pedido</option>
            <option value="otros" className="form-container__option">Otra información</option>
          </select>

          <label htmlFor="nombre" className="form-container__label">Nombre completo</label>
          <input type="text" id="nombre" name='nombre' className="form-container__input" placeholder='Ingrese un nombre' value={form.nombre} onChange={handleChange}/>
          <label htmlFor="mail" className="form-container__label">Email</label>
          <input type="email" id="mail" className="form-container__input" name='mail' placeholder='Ingrese un mail' value={form.mail} onChange={handleChange}/>
          <label htmlFor="telefono" className="form-container__label">Teléfono</label>
          <input type="text" id="telefono" className="form-container__input" name='telefono' placeholder='Ingrese un número' value={form.telefono} onChange={handleChange}/>
          <label htmlFor="comentarios" className="form-container__label">Comentarios</label>
          <textarea name="comentarios" id="comentarios" cols="30" rows="10" className="form-container__textarea" value={form.comentarios} onChange={handleChange}></textarea>

          <button type="submit" className="form-container__button">Enviar</button>
        </form>
      </div>
    </>
  )
}

export default FormContacto