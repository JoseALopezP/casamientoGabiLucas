import React, {useState, useContext} from 'react';
import { ListContext } from '../Context/ListContext';
import {Timestamp} from "firebase/firestore";

const PopConfirmationBlock = () => {
    const {addGuest, qDinner} = useContext(ListContext);
    const [sentStatus, setSentStatus] = useState(true);
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [dni, setDNI] = useState();
    const [diet, setDiet] = useState('');

    const handleSubmit = async(event) => {
        event.preventDefault();
        const now = new Date()
        now.setHours(-3, 0, 0, 0) // +5 hours for Eastern Time.
        const timestamp = Timestamp.fromDate(now);
        console.log(1);
        console.log(qDinner);
        const data = {
            "nombre": name, 
            "apellido": surname,
            "dni": dni,
            "diet": diet,
            "dinner": qDinner,
            "date": timestamp,
        }
        console.log(2);
        await addGuest(data);
        console.log(3);
        setSentStatus(!sentStatus);
        console.log(4);
    }

    return (
        <>
            {sentStatus ? (
            <form onSubmit={(event) => handleSubmit(event)}>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Nombre:</label>
                <input type="name" className="form-control" id="IngresarNombre" aria-describedby="emailHelp" placeholder="Ingresar Nombre" onChange={e => setName(e.target.value)}/>
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Apellido:</label>
                <input type="surname" className="form-control" id="IngresarApellido" aria-describedby="emailHelp" placeholder="Ingresar Apellido" onChange={e => setSurname(e.target.value)}/>
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">DNI:</label>
                <input type="dni" className="form-control" id="IngresarDNI" aria-describedby="emailHelp" placeholder="Ingresar DNI" onChange={e => setDNI(e.target.value)}/>
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">¿Tiene alguna dieta especial? (opcional, ingresar cuál)</label>
                <input type="diet" className="form-control" id="IngresarTipoDeDieta" aria-describedby="emailHelp" placeholder="Tipo de dieta" onChange={e => setDiet(e.target.value)}/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            ) : (<p>Su confirmación ha sido enviada con éxito</p>)}
        </>
    );
}

export default PopConfirmationBlock;
