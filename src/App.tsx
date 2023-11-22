
import 'react-toastify/dist/ReactToastify.css';
import Table from "./services/ClienteService";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <>
      {/* <ToastContainer/>
      <Router>
          <Header/>
          <Container style={{minHeight: '100vh', minWidth: '100%', padding:'0'}}>
            <Suspense fallback={<Loader/>}>
              <AppRoutes/>
            </Suspense>
          </Container>
            
          <Footer/>
      </Router> */}
      <Header/>
      <Table/>
      <Footer/>
    </>
  )
}

export default App
