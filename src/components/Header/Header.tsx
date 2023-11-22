import { faCircleUser, faSearch, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Form, FormControl, Nav, Navbar } from "react-bootstrap";


const Header = () => {
    
    const formStyle: React.CSSProperties= {
      marginLeft: 'auto',
      position: 'relative',
    };
  
    const searchIconStyle: React.CSSProperties = {
      position: 'absolute',
      top: '50%',
      right: '10px',
      transform: 'translateY(-50%)',
      cursor: 'pointer',
    };
  
      const iconStyle = {
        color: 'white', // Puedes cambiar 'red' al color que desees
      }
  
    return (
      <Navbar expand="lg" style={{backgroundColor: "rgb(74, 8, 8)"}}>
        <Navbar.Brand href="#">
          <p style={{color:'white', paddingLeft:'28px'}}>El Buen Sabor</p>
          {/* <img
            src="./../../assets/images/logo.jpg"
            style={{ width: '50px', marginRight: '10px' }}
          /> */}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            {/* Puedes agregar enlaces adicionales aquí si es necesario */}
          </Nav>
          <Form style={formStyle}>
            <FormControl type="text" placeholder="Buscar" className="mr-sm-2" />
            <FontAwesomeIcon icon={faSearch} style={searchIconStyle} />
          </Form>
          <Nav className="ml-auto">
            <Nav.Link href="/administracion">
              <FontAwesomeIcon path='/administracion' icon={faCircleUser} style={iconStyle}/> 
            </Nav.Link>
            <Nav.Link href="#cart">
              <FontAwesomeIcon icon={faShoppingCart} style={iconStyle}/>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
  );
};

export default Header;
