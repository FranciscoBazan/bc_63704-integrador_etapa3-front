import { useState } from "react"

export const useFormContacto = (estadoInicial = {}) => {
    const [values, setValues] = useState(estadoInicial)

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setValues({
          ...values,
          [name]: value
        })
      }
    

    return [values, setValues, handleInputChange]
}