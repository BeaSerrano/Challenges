import './App.css'
import Header from './components/Header';
import Footer from './components/Footer';
import ListaEmpleados from './components/ListaEmpleados';
import Calculadora from './components/Calculadora';
import { empleados } from './data/empleados';


function App() {
  
  return (
    <>
      <Header />
      <main>
        <ListaEmpleados empleados={empleados} />
        <Calculadora />
      </main>
      <Footer />
    </>
  )
}

export default App