
import { Button, Col, Dropdown, Form, Modal, Row } from 'react-bootstrap';
import { ModalType } from '../../types/ModalType';
import { ListaClienteDTO } from '../../types/ListaClienteDTO';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { toast } from 'react-toastify';

type ListaClienteDTOModalProps = {
  show: boolean;
  onHide: () => void;
  title: string;
  modalType: ModalType;
  clientes : ListaClienteDTO;
  onDelete: (listaClienteDTO: ListaClienteDTO) => void;
  onSaveUpdate: (listaClienteDTO: ListaClienteDTO) => void;
};

const ListaClienteDTOModal: React.FC<ListaClienteDTOModalProps> = ({
  show,
  onHide,
  title,
  modalType,
  clientes,
  onDelete,
  onSaveUpdate,
}: ListaClienteDTOModalProps) => {
  
  const handleSaveUpdate = async (clientes: ListaClienteDTO) => {
    try {
      const isNew = clientes.id === 0;

      await onSaveUpdate(clientes);

      
      toast.success(isNew ? 'Cliente Creado' : 'Cliente Actualizado', {
        position: 'top-center',
      });
      onHide();
    } catch (error) {
      console.error('Ha ocurrido un Error');
    }
  };

  const handleDelete = async () => {
    try {
      const isNew = clientes.id === 0;
      await onDelete(clientes);
      toast.success(isNew ? 'Cliente creado' : 'Cliente eliminado', {
        position: 'top-center',
      });
      onHide();
    } catch (error) {
      console.error('Ha ocurrido un Error');
    }
  };

  const validationSchema = Yup.object().shape({
    nombre: Yup.string().required('El nombre es requerido'),
    apellido: Yup.string().required('El apellido es requerido'),
    email: Yup.string().required('El email es requerido'),
    calle: Yup.string().required('La direccion es requerida'),
    localidad: Yup.string().required('El departamento es requerido'),
    telefono: Yup.string().matches(/^\d+$/, 'Solo puede ingresar numeros').required('El telefono es requerido'),
    numero: Yup.string().matches(/^\d+$/, 'Solo puede ingresar numeros').required('El numero de calle es requerido'),
  });

  const formik = useFormik({
    initialValues: clientes,
    validationSchema: validationSchema,
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: (obj: ListaClienteDTO) => handleSaveUpdate(obj),
  }) 
  ;

  return (
    <>
      {modalType === ModalType.DELETE ? (
        <Modal show={show} onHide={onHide} centered backdrop="static">
          <Modal.Header closeButton>
            <Modal.Title>{title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              ¿Está seguro que desea eliminar este cliente?
              <br /> <strong>{clientes.nombre}</strong>
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={onHide}>
              Cancelar
            </Button>
            <Button variant="danger" onClick={handleDelete}>
              Borrar
            </Button>
          </Modal.Footer>
        </Modal>
      ) : (
        <Modal show={show} onHide={onHide} centered backdrop="static" size="lg">
          <Modal.Header closeButton>
            <Modal.Title>{title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          
            <div style={{ textAlign: 'left', textDecoration: 'underline', fontSize: '24px' }}> Datos Personales
            </div>
          
            <form onSubmit={formik.handleSubmit}>
              <Row>
                <Col>
                  <Form.Group controlId="formNombre">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                      name="nombre"
                      type="text"
                      value={formik.values.nombre}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      isInvalid={Boolean(formik.errors.nombre && formik.touched.nombre)}
                    />
                    <Form.Control.Feedback type="invalid">
                      {formik.errors.nombre}
                    </Form.Control.Feedback>
                  </Form.Group>


                </Col>
                <Col>
                  <Form.Group controlId="formApellido">
                    <Form.Label>Apellido</Form.Label>
                    <Form.Control
                      name="apellido"
                      type="text"
                      value={formik.values.apellido}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      isInvalid={Boolean(formik.errors.apellido && formik.touched.apellido)}
                    />
                    <Form.Control.Feedback type="invalid">
                      {formik.errors.apellido}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
              </Row>


              <Row>
                <Col>
                  <Form.Group controlId="formEmail">
                    <Form.Label>Correo electronico</Form.Label>
                    <Form.Control
                      name="email"
                      type="text"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      isInvalid={Boolean(formik.errors.email && formik.touched.email)}
                    />
                    <Form.Control.Feedback type="invalid">
                      {formik.errors.email}
                    </Form.Control.Feedback>
                  </Form.Group>


                </Col>
                <Col>
                  <Form.Group controlId="formTelefono">
                    <Form.Label>Telefono</Form.Label>
                    <Form.Control
                      name="telefono"
                      type="text"
                      value={formik.values.telefono}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      isInvalid={Boolean(formik.errors.telefono && formik.touched.telefono)}
                    />
                    <Form.Control.Feedback type="invalid">
                      {formik.errors.telefono}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
              </Row>


              <Row>
                <Col>
                <Form.Group controlId="formDireccion">
                    <Form.Label>Calle</Form.Label>
                    <Form.Control
                      name="calle"
                      type="text"
                      value={formik.values.calle}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      isInvalid={Boolean(formik.errors.calle && formik.touched.calle)}
                    />
                    <Form.Control.Feedback type="invalid">
                      {formik.errors.calle}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="formDepartamento">
                    <Form.Label>Número</Form.Label>
                    <Form.Control
                      name="numero"
                      type="number"
                      value={formik.values.numero}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      isInvalid={Boolean(formik.errors.numero && formik.touched.numero)}
                    />
                    <Form.Control.Feedback type="invalid">
                      {formik.errors.numero}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="formDepartamento">
                    <Form.Label>Departamento</Form.Label>
                    <Form.Control
                      name="localidad"
                      type="text"
                      value={formik.values.localidad}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      isInvalid={Boolean(formik.errors.localidad && formik.touched.localidad)}
                    />
                    <Form.Control.Feedback type="invalid">
                      {formik.errors.localidad}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
              </Row>

              <Modal.Footer className="mt-4" style={{justifyContent: 'space-between'}}>
                <Button variant="secondary" onClick={onHide} style={{backgroundColor: "red",borderBlockColor: "red", borderRadius: '15px'}}>
                  Cancelar
                </Button>
                <Button variant="primary" type="submit"  disabled={!formik.isValid} style={{backgroundColor: "rgb(227, 134, 47)", borderRadius: '15px'}}>
                  Guardar
                </Button>
    
              </Modal.Footer>
            </form>
          </Modal.Body>
        </Modal>
      )}
    </>
  );
};

export default ListaClienteDTO;