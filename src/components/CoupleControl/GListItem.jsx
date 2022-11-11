import React, {useContext} from 'react';
import { Button } from 'react-bootstrap';
import { GListContext } from '../Context/GiftListContext';

const GListItem = ({item}) => {
    const {removeGift} = useContext(GListContext);
    return (
        <>
            <tr>
                <td><img src={item.img} alt="img"/></td>
                <td>{item.descripcion}</td>
                <td>{item.status ? 'No ha sido regalado' : 'Ya ha sido regalado'}</td>
                <td><Button variant="danger" onClick={() => removeGift(item.id)}>eliminar</Button></td>
            </tr>
        </>
    );
}

export default GListItem;
