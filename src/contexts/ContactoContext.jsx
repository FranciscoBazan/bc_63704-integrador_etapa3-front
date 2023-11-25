import { createContext, useState } from "react";
import { postCliente } from "../utils/http";

const ContactoContext = createContext()

const url = import.meta.env.VITE_URL_CLIENTES
const ContactoProvider = ( { children } ) => {
    const [clientes, setClientes] = useState([])

    const crearClienteContext = async (clienteNuevo) => {
        try {
            const clienteCreado = await postCliente(url, clienteNuevo)
            setClientes([...clientes, clienteCreado])
        } catch (error) {
            console.error('Ocurrió un error en crearCliente()', error)
        }
        
    }

    const data = { crearClienteContext }

    return <ContactoContext.Provider value={data}>{children}</ContactoContext.Provider>
}

export { ContactoProvider }
export default ContactoContext