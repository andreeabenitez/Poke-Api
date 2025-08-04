import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import pedirDatos from './PedirDatos'
import Tarjeta from './components/Tarjeta'
import ListaTarjetas from './components/ListaTarjetas'

function App() {
  const [paginaactual, setPaginaActual] = useState(1);
  const [arr, setArr] = useState([]);
  useEffect(()=>{
    async function esperarDatos() {
      const datos = await pedirDatos(paginaactual);
      setArr(datos);
    }
    esperarDatos();
  },[paginaactual])
  

  function subirContador(){
    setPaginaActual(prev => prev + 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function bajarContador(){
    if(paginaactual>1){setPaginaActual(prev => prev - 1);}
    window.scrollTo({ top: 0, behavior: 'smooth' });
    console.log(paginaactual)
  }

  
  return (
    <>
        <input
        type="text"
        className="barrabusq"
        id=""
        placeholder="Filtra pokemons por nombre..."
      />
    <ListaTarjetas arr={arr}></ListaTarjetas>
      <div className="btns__pg">
        {paginaactual > 1 &&
        <a className="btn__rt" onClick={bajarContador}>Retroceder</a>}
        <a className="btn__av" onClick={subirContador}>Avanzar</a>
      </div>
    </>
  )
}

export default App
