

function Footer() {
  return (
    <>
    <footer className="mt-auto py-3" style={{ color: 'white', backgroundColor: 'rgb(74, 8, 8)', padding: '20px' }}>
        <div className="container" style={{padding:'30px'}}>
          <div className="row">
            <div className="col-md-4 col-12">
              {/* División 1 */}
              <div>
                {/* <img src="ruta_de_la_imagen_1" alt="Descripción de la imagen 1" style={{ width: '100%' }} /> */}
              </div>
            </div>
            <div className="col-md-4 col-12">
              {/* División 2 */}
              <div>
                <h4>Redes Sociales</h4>
                <p>Facebook</p>
                <p>Instagram</p>
                <p>X</p>
                <p>LinkedIn</p>
              </div>
            </div>
            <div className="col-md-4 col-12">
              {/* División 3 */}
              <div>
                <h4>Oficina Central</h4>
                <p>Calle Avenida Siempre Viva 123</p>
                <p>elbuensabor@sincodigos.com</p>
                <p>(123)456-789</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer;