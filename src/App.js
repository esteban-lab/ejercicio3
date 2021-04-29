import {useState} from "react";
import './App.css';
import Agenda from "./components/Agenda";
import Formulario from "./components/Formulario";

function App() {


  const InitialContactosState = [

        {id:1, nombre: "Pompeyo", apellidos: "Ayala Vega", direccion: "calle panorama 666", ciudad:"Monaco", cp: 398035, tlf: 677708990}, 
        {id:2, nombre: "Seya", apellidos: "lurin janampa", direccion: "calle panorama 456", ciudad:"Osaka", cp: 303235, tlf: 645608990},
        {id:3, nombre: "Esmeregildo", apellidos: "Miro Quesada", direccion: "calle infiernillo 69", ciudad:"Krakobia", cp: 32355, tlf: 678708990}
    ];

  const [contactos, setContactos] = useState(InitialContactosState);  

  return (
    <div className="container">
      <h3 className="my-4">Contact List</h3>
      <Agenda contactos={contactos} setContactos ={setContactos}/>

      <h3 className="my-4">New Contact</h3>
      <Formulario setContactos={setContactos}/>
    </div>
  );
}

export default App;
