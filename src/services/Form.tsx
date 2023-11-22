


export default function Form({formVisible, guardando, texto, mode, cliente, handleInputChange, postCliente, putCliente}: any) {
    return (
        <>
        <div className='flex flex-col justify-between w-2/3 h-2/3 bg-white border-[1px] border-gray-500 rounded-md shadow-xl shadow-gray-500'>
        <div className='flex flex-row justify-between items-center px-10 py-4'>
          <h1 className='font-semibold text-xl'>Nuevo Cliente</h1>
          <button 
          className='bg-red-300 rounded-lg shadow-md shadow-gray-400 px-2 py-1 hover:shadow-white font-semibold'
          onClick={() => formVisible(false)}>
            Cerrar
          </button>
        </div>
        <div className='px-10 py-4'>
          <form className='grid grid-cols-2 gap-4'>
              <div className='flex flex-col gap-2'>
                <label>Nombre</label>
                <input 
                className='border-[1px] border-gray-400 rounded-md shadow-md shadow-gray-400' 
                type="text" 
                name='nombre'
                value={cliente.nombre}
                onChange={handleInputChange}/>
              </div>
              <div className='flex flex-col gap-2'>
                <label>Apellido</label>
                <input 
                className='border-[1px] border-gray-400 rounded-md shadow-md shadow-gray-400' 
                type="text" 
                name='apellido'
                value={cliente.apellido}
                onChange={handleInputChange}/>
              </div>
              <div className='flex flex-col gap-2'>
                <label>Telefono</label>
                <input 
                className='border-[1px] border-gray-400 rounded-md shadow-md shadow-gray-400' 
                type="text" 
                name='telefono'
                value={cliente.telefono}
                onChange={handleInputChange}
                />
              </div>
              <div className='flex flex-col gap-2'>
                <label>Calle</label>
                <input 
                className='border-[1px] border-gray-400 rounded-md shadow-md shadow-gray-400' 
                type="text" 
                name='calle'
                value={cliente.calle}
                onChange={handleInputChange}
                />
              </div>
               <div className='flex flex-col gap-2'>
                <label>Numero</label>
                <input 
                className='border-[1px] border-gray-400 rounded-md shadow-md shadow-gray-400' 
                type="number" 
                name='numero'
                value={cliente.numero}
                onChange={handleInputChange}
                />
              </div>
              <div className='flex flex-col gap-2'>
                <label>Localidad</label>
                <input 
                className='border-[1px] border-gray-400 rounded-md shadow-md shadow-gray-400' 
                type="text" 
                name='localidad'
                value={cliente.localidad}
                onChange={handleInputChange}
                />
              </div>
              <div className='flex flex-col gap-2'>
                <label>Clave provisoria</label>
                <input 
                className='border-[1px] border-gray-400 rounded-md shadow-md shadow-gray-400' 
                type="text" 
                name='claveProvisoria'
                value={cliente.claveProvisoria}
                onChange={handleInputChange}
                />
              </div>
              
                
          </form>
          
        </div>
        <div className='w-full flex flex-row justify-between items-end px-4 py-4'>
          <button 
          className='bg-green-300 rounded-lg shadow-md shadow-gray-400 px-2 py-1 hover:shadow-white font-semibold'
          onClick={() => {
            if (mode === 'edit') {
              putCliente()
            } else {
              postCliente()
            }
            
          }}
          >
            Guardar
          </button>
          {
            guardando ? (
              <p className='font-semibold text-yellow-400'>Guardando...</p>
            ) : (
              <p className='font-semibold text-green-400'>{texto}</p>
            )
          }
        </div>
      </div>
      </>
  )
}



























        {/* {modalType === ModalType.DELETE ? (
          <Modal show={show} onHide={onHide} centered backdrop="static">
            <Modal.Header closeButton>
              <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>
                ¿Está seguro que desea eliminar este empleado?
                <br /> <strong>{empleados.nombre}</strong>
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
             */}
              
              {/* <div className='flex flex-row justify-between items-center px-10 py-4'>
                <h1 className='font-semibold text-xl'>Nuevo empleado</h1>
                <button 
                    className='bg-red-300 rounded-lg shadow-md shadow-gray-400 px-2 py-1 hover:shadow-white font-semibold'
                    onClick={() => setForm("hidden")}>
                    Cerrar
                </button>
                </div>
            
              {/* <form onSubmit={formik.handleSubmit}>
                <Row>
                  <Col>
                    
                      <Form>Nombre</Form>
                      <Form
                        name="nombre"
                        type="text"
                        value={empleado.nombre}
                        onChange={handleInputChange}
                      />
                    
                  </Col>

                  <Col>
                    <Form controlId="formApellido">
                      <Form>Apellido</Form>
                      <Form
                        name="apellido"
                        type="text"
                        value={empleado.apellido}
                        onChange={handleInputChange}
                      />
                      </Form>
                      
                  </Col>
                </Row>
  
  
                <Row>
                  <Col>
                    <Form controlId="formEmail">
                      <Form>Correo electronico</Form>
                      <Form
                        name="email"
                        type="text"
                        value={empleado.email}
                        onChange={handleInputChange}
                      />
                      
                    </Form>
  
  
                  </Col>
                  <Col>
                    <Form controlId="formTelefono">
                      <Form>Telefono</Form>
                      <Form
                        name="telefono"
                        type="text"
                        value={empleado.telefono}
                        onChange={handleInputChange}
                      />
                      
                    </Form>
                  </Col>
                </Row>
  
  
                <Row>
                  <Col>
                  <Form controlId="formDireccion">
                      <Form>Calle</Form>
                      <Form
                        name="calle"
                        type="text"
                        value={empleado.calle}
                        onChange={handleInputChange}
                      />
                      
                    </Form>
                  </Col>
                  <Col>
                    <Form controlId="formDepartamento">
                      <Form>Número</Form>
                      <Form
                        name="numero"
                        type="number"
                        value={empleado.numero}
                        onChange={handleInputChange}
                      />
                      
                    </Form>
                  </Col>
                  <Col>
                    <Form controlId="formDepartamento">
                      <Form>Departamento</Form>
                      <Form
                        name="localidad"
                        type="text"
                        value={empleado.localidad}
                        onChange={handleInputChange}
                      />
                      
                    </Form>
                  </Col>
                </Row>
  
  
                <div style={{ textAlign: 'left', textDecoration: 'underline', fontSize: '24px' }}> Datos de usuario</div>
                <Col>
                <Form controlId="formRol">
                  <Form>Rol:</Form>
                  <select 
                className='border-[1px] border-gray-400 rounded-md shadow-md shadow-gray-400'
                name='rubro'
                value={empleado.rol}
                onChange={handleInputChange}>
                  <option>Administrador</option>
                  <option>Cajero</option>
                  <option>Cocinero</option>
                  <option>Delivery</option>
                </select>
                </Form>
              </Col>
  
              <Col>
                <Form controlId="formEstado">
                  <Form>Estado:</Form>
                  <select 
                className='border-[1px] border-gray-400 rounded-md shadow-md shadow-gray-400'
                name='rubro'
                value={empleado.estado}
                onChange={handleInputChange}>
                  <option>Alta</option>
                  <option>Baja</option>
                </select>
                </Form>
              </Col>
  
              <div className='w-full flex flex-row justify-between items-end px-4 py-4'>
          <button 
          className='bg-green-300 rounded-lg shadow-md shadow-gray-400 px-2 py-1 hover:shadow-white font-semibold'
          onClick={() => {
            if (mode === 'edit') {
              putEmpleado()
            } else {
              postEmpleado()
            }
            
          }}
          >
            Guardar
          </button>
          {
            guardando ? (
              <p className='font-semibold text-yellow-400'>Guardando...</p>
            ) : (
              <p className='font-semibold text-green-400'>{texto}</p>
            )
          }
        </div>
      
              {/* </form> */}
            {/* </Modal.Body>
          </Modal> */}
    
