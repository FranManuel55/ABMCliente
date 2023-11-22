import { useEffect, useState } from "react";
//import { DtoEmpleado, Rol } from "../../types/DTOEmpleado";
import { ClienteService } from "../../services/ClienteService";
import { Button, Table } from "react-bootstrap";
import Loader from "../Loader/Loader";
import { ModalType } from "../../types/ModalType";
import ListaClienteDTOModal from "../ProductModal/ClienteModal";
import { EditButton } from "../EditButton/EditButton";
import { DeleteButton } from "../DeleteButton/DeleteButton";
import "./ClienteTabla.css";
import { PlusCircle} from "react-bootstrap-icons";


const estiloBoton = {
  backgroundColor: "#7CB518",
  color: 'white',
  borderColor: "#7CB518", // para asegurar que el texto sea legible en el fondo verde
  borderRadius: '15px'
};

const ListaClienteDTOTable = () => {
  const [listaClienteDTO, setlistaClienteDTO] = useState<ListaClienteDTO[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchListaClienteDTO = async () => {
      try {
        const listaClienteDTO = await ListaClienteDTOService.getListaClienteDTO();
        setlistaClienteDTO(listaClienteDTO);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchListaClienteDTO();
  }, []);

  const initializeNewListaClienteDTO = (): ListaClienteDTO => {
    return {
      id: 0,
      nombre: "",
      apellido: "",
      email: "",
      telefono: "",
      localidad: "",
      calle: "",
      numero: "",
    };
  };

  const [selectedListaClienteDTO, setSelectedListaClienteDTO] = useState<ListaClienteDTO>(initializeNewListaClienteDTO());

  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState<ModalType>(ModalType.NONE);
  const [title, setTitle] = useState("");

  const handleClick = (newTitle: string, empleados: ListaClienteDTO, modal: ModalType) => {
    setTitle(newTitle);
    setModalType(modal);
    setSelectedListaClienteDTO(empleados);
    setShowModal(true);
  };

  const handleDeleteDtoEmpleado = async (listaClienteDTO: ListaClienteDTO) => {
    try {
      await ListaClienteDTOService.deleteListaClienteDTO(ListaClienteDTO.id);
      const updatedListaClienteDTO = listaClienteDTO.filter((p) => p.id !== listaClienteDTO.id);
      setlistaClienteDTO(updatedListaClienteDTO);
    } catch (error) {
      console.error(error);
    }
    setShowModal(false);
  };

  const handleUpdateDtoEmpleado = (updatedListaClienteDTO: ListaClienteDTO) => {
    try {
      const updatedListaClienteDTO = listaClienteDTO.map((p) =>
        p.id === updatedListaClienteDTO.id ? updatedListaClienteDTO : p
      );
      setlistaClienteDTO(updatedListaClienteDTO);
    } catch (error) {
      console.error(error);
    }
    setShowModal(false);
  };

  return (
    <>
      <div className="button-containerH4" style={{ padding:'20px', alignItems:'center', width:'100%' }}>
          <button className="buttonH4_2" style={{ borderRadius:'10px', width:'100%', height:'100px' }}> <h3>Clientes</h3></button>
          <button className="buttonH4_2" style={{ borderRadius:'10px',color: 'grey', borderColor: "black", width:'100%', height:'100px' }} ><h3>Clientes</h3></button>
        </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'start' }}>

        <div style={{ textAlign: 'right', paddingRight: '20px', marginLeft:'20px' }}>
          <Button
            style={estiloBoton}
            onClick={() =>
              handleClick("+ Agregar nuevo Cliente", initializeNewListaClienteDTO(), ModalType.CREATE)
            }
          >
            <PlusCircle style={{ marginRight: '5px', verticalAlign: 'middle', fontSize: '20px' }} />
            Nuevo
          </Button>
        </div>

      </div>

      <div style={{ marginBottom: '10px' }}>
      </div>
      <div style={{ margin: '10px' }}>
        
      </div>

            
            


      {isLoading ? (
        <Loader />
      ) : (
        <Table hover>
          <thead >
            
          </thead>
          <tbody>
          <tr>
              <td style={{backgroundColor:'rgb(221, 220, 220)'}}></td>
              <td style={{backgroundColor:'rgb(221, 220, 220)'}}> <strong>Empleado</strong></td>
              <td style={{backgroundColor:'rgb(221, 220, 220)'}}> <strong>Email</strong></td>
              <td style={{backgroundColor:'rgb(221, 220, 220)'}}> <strong>Telefono</strong></td>
              <td style={{backgroundColor:'rgb(221, 220, 220)'}}> <strong>Direccion</strong></td>
              <td style={{backgroundColor:'rgb(221, 220, 220)'}}> <strong>Departamento</strong></td>
              <td style={{backgroundColor:'rgb(221, 220, 220)'}}> <strong>Numero</strong></td>
              <td style={{backgroundColor:'rgb(221, 220, 220)'}}> <strong>Acciones</strong></td>
            </tr>
            {listaClienteDTO.map((listaClienteDTO) => (
              <tr key={listaClienteDTO.id}>
                <td>
                  <input type="checkbox" style={{ marginLeft: '8px' }} />
                </td>
                <td>
                  <div>{`${listaClienteDTO.nombre} ${listaClienteDTO.apellido}`} </div>
                </td>
                <td>
                  {listaClienteDTO.email}
                </td>
                <td>
                    {listaClienteDTO.telefono}
                </td>
                <td>
                  {listaClienteDTO.calle}
                </td>
                <td>
                  {listaClienteDTO.numero}
                </td>
                <td>
                  {listaClienteDTO.localidad}
                </td>
                <td style={{padding:'10px'}}>
                <EditButton
                  onClick={() =>
                  handleClick("Editar Empleado", listaClienteDTO, ModalType.UPDATE)
                  }
                />

                <DeleteButton 
                  onClick={() =>
                  handleClick("Borrar Empleado", listaClienteDTO, ModalType.DELETE)
                  }
                />
                </td>  
              </tr>
            ))}
          </tbody>
        </Table>
      )}

      {showModal && (
        <ListaClienteDTOModal
          show={showModal}
          onHide={() => setShowModal(false)}
          title={title}
          modalType={modalType}
          clientes={selectedListaClienteDTO}
          onDelete={handleDeleteListaClienteDTO}
          onSaveUpdate={handleUpdateListaClienteDTO}
        />
      )}
    </>
  );
};

export default ListaClienteDTOTable;
