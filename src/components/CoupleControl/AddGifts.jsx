import React, {useContext, useState} from 'react';
import { Form, Button } from 'react-bootstrap';
import { GListContext } from '../Context/GiftListContext';

const AddGifts = () => {
    const [name, setName] = useState('');
    const [src, setSrc] = useState('');
    const {addGift, updateGList} = useContext(GListContext)

    const handleSubmit = async(event) =>{
        event.preventDefault();
        const data = {
            "descripcion": name,
            "img": src,
            "status": true,
        }
        await addGift(data);
        await updateGList();
        document.addGiftForm.reset();
    }
    
    return (
        <div>
            <h3>AGREGAR REGALO A LA LISTA</h3>
            <Form name='addGiftForm' onSubmit={(event) => handleSubmit(event)}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Nombre:</Form.Label>
                <Form.Control type="tipo" placeholder="Ingresa nombre del regalo" onChange={e => setName(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Imágen:</Form.Label>
                <Form.Control type="imgSrc" placeholder="Ingresa link imagen de muestra" onChange={e => setSrc(e.target.value)}/>
            </Form.Group>
            <Button variant="primary" type="submit">
                Agregar
            </Button>
            </Form>
        </div>
    );
}

export default AddGifts;
