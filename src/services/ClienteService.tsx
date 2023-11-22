//va a contener todos las funciones y métodos relacionados con la comunicación de la API, aquí vamos a crear 5 métodos para tener un ABM completo
import { ChangeEvent, useEffect, useState } from "react";
import Form from "./Form";

export default function Table() {


// const BASE_URL = 'http://localhost:10000/api/v1/clientes';
const [formVisible, setFormVisible] = useState(false)
  const [guardando, setGuardando] = useState(false)
  const [texto, setTexto] = useState('')
  const [token, setToken] = useState('')
  const [mode, setMode] = useState('new')

  type Cliente = {
    id: number;
    nombre: string;
    apellido: string;
    email: string;
    telefono: string;
    localidad: string;
    calle: string;
    numero: number;
    claveProvisoria: string;
  }

  const [cliente, setCliente] = useState<Cliente>({
    id: 0,
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
    localidad: '',
    calle: '',
    numero: 0,
    claveProvisoria: ''
  })

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    if (name === 'id' || name === 'numero') {
      if (parseInt(value) >= 0) {
        setCliente({
          ...cliente,
          [name]: parseInt(value),
        });
      }
      
    } else {
      setCliente({
        ...cliente,
        [name]: value,
      });
    }
  };
    

    const [data, setData] = useState<Cliente[]>([])

      useEffect(() => {
        fetch("http://localhost:10000/auth/login", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            "username": "paulaf",
            "password": "sincodigos"//Tengo que cambiar estos
          })
        })
        .then((res) => res.json())
        .then((res) => {
          localStorage.setItem('token', res.token)
          setToken(res.token)
    
          fetch("http://localhost:10000/api/v1/empleados/listaEmpleados",//Aca nose que poner
          {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
          })
          .then(res => res.json())
          .then(res => setData(res))
        })

      }, [])

    // Crear un nuevo empleado
  
    function postEmpleado() {
      setGuardando(true)
      //Aca Tampoco se que poner
      fetch("http://localhost:10000/api/v1/empleados/registerEmpleado", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token
        },
        body: JSON.stringify(cliente)
      })
      .then(() => {
        setGuardando(false)
        setTexto('Guardado')
      })
    }

    function putCliente() {
      setGuardando(true)
      //Aca tampoco se que poner
      fetch("http://localhost:10000/api/v1/empleados/modifyEmpleado", {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token
        },
        body: JSON.stringify(cliente)
      })
      .then(() => {
        setGuardando(false)
        setTexto('Guardado')
      })
    }

    function deleteCliente(id) {
      const parsedId = parseInt(id, 10); // Intenta convertir `id` a un número
      if (isNaN(parsedId)) {
        console.error('El ID no es un número válido:', id);
        return;
      }
    
      setGuardando(true);
      //Aca tampoco 
      fetch(`http://localhost:10000/api/v1/empleados/deleteEmpleado/${parsedId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token
        },
        body: JSON.stringify(cliente)
      })
      .then(() => {
        setGuardando(false);
        setTexto('Eliminado');
      });
    }
    
  
    function handleEdit(cliente: Cliente) {
      setCliente(cliente)
    }

  return(
    //Aca tengo que cambiar la flecha
    <>
    <div className="button-containerH4" style={{alignItems:'center', width:'100%', display:'flex'}}>
          <button className="buttonH4_2" style={{width:'100%', height:'100px', borderTop:'none', borderLeft:'none' }}> <h3>Empleados</h3></button>
          <button className="buttonH4_2" style={{width:'100%', height:'100px', borderTop:'none', borderLeft:'none', borderRight:'none' }} ><h3>Clientes</h3></button>
        </div>
    <div className='flex flex-row justify-between items-center px-10 py-4'>
        <div className='flex flex-row' style={{marginLeft:'20px'}}>
          <button 
          style={{backgroundColor:'rgb(88, 195, 80)', borderRadius:'15px', border:'none', padding:'5px 10px'}}
          onClick={() => setFormVisible(true)}>
            Nuevo
          </button>
        </div>
        {/* <div className='flex flex-row gap-2'>
          <input className='border-[1px] border-gray-400 rounded-md shadow-md shadow-gray-400' type="text" />
          <img className='object-contain' src='/lupa.png' width={20} height={20}/>
        </div> */}
    </div>
    <div className='px-10 w-screen'>
      <table className='w-full' style={{width:'100%', textAlign:'center', padding:'8px', borderRadius:'5px', marginBottom:'99px'}}>
        <thead className='w-full bg-gray-300'>
          <tr style={{backgroundColor:'rgb(198, 198, 198)'}}>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Email</th>
            <th>Telefono</th>
            <th>Calle</th>
            <th>Numero</th>
            <th>Localidad</th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody className='w-full'>
          {
            data.length > 0 ? 
            data.map((cliente) => {
              return (
                <tr key={cliente.id} className='w-full'>
                  <td className='text-center'>{cliente.nombre}</td>
                  <td className='text-center'>{cliente.apellido}</td>
                  <td className='text-center'>{cliente.email}</td>
                  <td className='text-center'>{cliente.telefono}</td>
                  <td className='text-center'>{cliente.calle}</td>
                  <td className='text-center'>{cliente.numero}</td>
                  <td className='text-center'>{cliente.localidad}</td>
                  <td className='text-center'>
                    <button 
                    onClick={() => {
                      handleEdit(cliente)
                      setFormVisible(true)
                      setMode('edit')
                    }}
                    className='bg-yellow-300 rounded-lg shadow-md shadow-gray-400 px-2 py-1 hover:shadow-white font-semibold'
                    style={{marginRight:'15px', backgroundColor:'black', color:'white'}}>
                      Editar
                    </button>
                    <button 
                    onClick={() => {
                      deleteCliente(cliente.id) 
                    }}
                    className='bg-yellow-300 rounded-lg shadow-md shadow-gray-400 px-2 py-1 hover:shadow-white font-semibold'
                    style={{backgroundColor:'black', color:'white'}}>
                      Eliminar
                    </button>
                  </td>

                </tr>
              )
            })
            : <tr><td className='text-center' colSpan={10}>Cargando...</td></tr>
          }
        </tbody>
      </table>
    </div>
    {setFormVisible && (
      <Form 
      formVisible={setFormVisible}
      cliente={cliente}
      handleInputChange={handleInputChange}
      mode={mode}
      postCliente={postCliente}
      putCliente={putCliente}
      deleteCliente={deleteCliente}
      guardando={guardando}
      texto={texto}
      />
    )}
    </>
  )
}