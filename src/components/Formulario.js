import {useState} from "react";

export default function Formulario({setContactos}) {

//     const [nombre, setNombre] = useState("");
//     const [apellidos, setApellidos] = useState("");
//     const [tlf, setTlf] = useState("");
//     const [direccion, setDireccion] = useState("");
//     const [cp, setCp] = useState("")
//     const [ciudad, setCiudad] = useState("");


// function handleNombre(e) {
//     setNombre(e.target.value);   
// };
// function handleApellidos(e) {
//     setApellidos(e.target.value);   
// };
// function handleTlf(e) {
//     setTlf(e.target.value);   
// };
// function handleDireccion(e) {
//     setDireccion(e.target.value);   
// };
// function handleCp(e) {
//     setCp(e.target.value);   
// };
// function handleCiudad(e) {
//     setCiudad(e.target.value);   
// };

const initialState = {
    nombre:"",
    apellidos:"",
    direccion:"",
    cp:"",
    tlf: "",
    ciudad:""
};

const [form, setForm] = useState(initialState)

function handleInput(e) {
    const inputName = e.target.id;
    const newValue = e.target.value;
  
    setForm({...form, ...{[inputName]: newValue}})
}


function submit(e) {
//     e.preventDefault();

//     const newContact = {nombre,apellidos,tlf,direccion,cp,ciudad,tlf};
    
//     setContactos(currentContacs => [...currentContacs,newContact]);

//     // e.target.reset();

//     setNombre("");
//     setApellidos("");
//     setTlf("");
//     setDireccion("");
//     setCp("");
//     setCiudad("");
}

    return (
       <form className="form-group" onSubmit={submit}>
           <input className="form-control mb-3"  type="text" id="nombre"    onChange={handleInput} placeholder="introduce el nombre" />
           <input className="form-control mb-3"  type="text" id="apellidos" onChange={handleInput} placeholder="introduce los apellidos" />
           <input className="form-control mb-3"  type="text" id="tlf"       onChange={handleInput} placeholder="introduce el telefono" />
           <input className="form-control mb-3"  type="text" id="direccion" onChange={handleInput} placeholder="introduce la direccion" />
           <input className="form-control mb-3"  type="text" id="cp"        onChange={handleInput} placeholder="introduce el codigo postal" />
           <input className="form-control mb-3"  type="text" id="ciudad"    onChange={handleInput} placeholder="introduce la ciudad" />
           <input type="submit" className="btn btn-success" value ="Registrar"/>
       </form>
    )
}
