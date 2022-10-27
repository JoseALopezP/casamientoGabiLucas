import React, {useState, useContext} from 'react';
import { GListContext } from '../Context/GiftListContext';
import { Timestamp } from 'firebase/firestore';
import { GiftedListContext } from '../Context/GiftedListContext';

const SendGift = ({type}) => {
    const [name, setName] = useState('');
    const [isOk, setIsOk] = useState('');
    const [msg, setMsg] = useState('');
    const [transferNum, setTransferNum] = useState('');
    const [sentStatus, setSentStatus] = useState(true);
    const {idSelected, gList, selectGift, setIdSelected} = useContext(GListContext);
    const {addGifted} = useContext(GiftedListContext);

    
    const idToType = () =>{
        let typeFromId = '';
        if(idSelected !== ''){
            for(const element of gList){
                if(element.id === idSelected){
                    typeFromId = element.descripcion;
                    break;
                }
            }
        }
        return(typeFromId);
    }
    const handleSubmit = async(event) => {
        event.preventDefault();
        if(idSelected === '' && transferNum === ''){
            setIsOk('noSelected')
        }else if(name === '' && transferNum === ''){
            setIsOk('noName')
        }else{
            const now = new Date()
            now.setHours(10, 0, 0, 0)
            const timestamp = Timestamp.fromDate(now);
            const data = {
                "confirmationDate": timestamp,
                "mensaje": msg,
                "nombre": name,
                "tipo": ((transferNum !== '') ? 'transferencia' : idToType()),
                "transferNumber": transferNum,
            }
            await addGifted(data);
            ((transferNum !== '') ? idToType() : await selectGift());
            setSentStatus(false);
            setIdSelected('');
        }
    }


    return (
        <>
            {sentStatus ? ( 
            <form onSubmit={(event) => handleSubmit(event)}>
            {type !== 'transferencia' && (
                <p>Has seleccionado: {idToType()}</p>
            )}
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Nombre y Apellido:</label>
                <input type="name" className="form-control" id="IngresarNombre" aria-describedby="emailHelp" placeholder="Ingresar Nombre" onChange={e => setName(e.target.value)}/>
            </div>
            {type === 'transferencia' &&(
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Ingresa el número de transferencia:</label>
                    <input type="msg" className="form-control" id="IngresarNumTransferencia" aria-describedby="emailHelp" placeholder="Número transferencia" onChange={e => setTransferNum(e.target.value)}/>
                </div>
            )}
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Si quieres puedes dejarnos un mensaje (opcional)</label>
                <input type="msg" className="form-control" id="IngresarMensaje" aria-describedby="emailHelp" placeholder="" onChange={e => setMsg(e.target.value)}/>
            </div>
            {isOk === 'noName' && (
                <div className="alert alert-danger d-flex align-items-center" role="alert">
                    <div>
                        Agrega tu nombre para confirmar el regalo
                    </div>
                </div>
            )}
            {isOk === 'noSelected' && (
                <div className="alert alert-danger d-flex align-items-center" role="alert">
                    <div>
                        Selecciona un regalo para continuar
                    </div>
                </div>
            )}
            <button type="submit" className="btn btn-primary submitBtn">CONFIRMAR</button>
            </form>
            ) : (<p className='thankMsg'><b>Muchas gracias!!!</b> Tu obsequio nos ayuda mucho ❤️​</p>)}
        </>
    );
}

export default SendGift;
