import { useState } from 'react'
import { post } from '../utils/http'
import './DragDrop.scss'

const DragDrop = ({ setFoto, srcImagen, setSrcImagen }) => {
    const [drag, setDrag] = useState(false)

    const arrayEventos = ['dragenter', 'dragleave', 'dragover', 'drop']

    arrayEventos.forEach(eventName => {
        document.body.addEventListener(eventName, e => e.preventDefault())
    })

    const handleDrop = e => {
        const dataTransfer = e.dataTransfer
        const files = dataTransfer.files

        handleFiles(files)
    }

    const handleChange = e => {
        const files = e.target.files

        handleFiles(files)
    }

    const handleFiles = async files => {
        try {
            const file = files[0]
            await uploadFile(file)
            previewFile(file)
        } catch (error) {
            console.error('[handleFiles]:', error)
        }
        
    }

    const previewFile = file => {
        const reader = new FileReader()
        reader.readAsDataURL(file)

        reader.addEventListener('loadend', () => {
            setSrcImagen(reader.result)
        })
    }

    const uploadFile = async file => {
        const formData = new FormData()

        try {
            formData.append('foto', file)

            const url = import.meta.env.VITE_URL_UPLOAD

            const imagenUp = await post(url, formData)
            setFoto(imagenUp)
        } catch (error) {
            console.error('[uploadFile]:', error)
        }
    }

    const handleEnter = () => {
        setDrag(true)
    }

    const handleOver = () => {
        setDrag(true)
    }

    const handleLeave = () => {
        setDrag(false)
    }

  return (
    <div className={`drop-area ${drag ? 'enter' : ''}`} onDrop={handleDrop} onDragEnter={handleEnter} onDragLeave={handleLeave} onDragOver={handleOver}>
        <div>
            <p>
                Subir imagen al servidor con <b>File Dialog</b> o con <b>drag and drop</b> dentro del área.
            </p>

            <input type="file" id='lbl-foto' accept='image/*' onChange={handleChange}/>
            <label className='drop-area-button' htmlFor="lbl-foto">
                File Dialog
            </label>
        </div>
        

        <div className='drop-area-image'>
            <img src={srcImagen} alt="" />
        </div>
    </div>
  )
}

export default DragDrop