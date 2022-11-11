import React, {useContext} from 'react';
import { GiftedListContext } from '../Context/GiftedListContext';
import { Button } from 'react-bootstrap';


const GiftedListItem = ({item}) => {
    const {removeGifted} = useContext(GiftedListContext);
    const removeGift = async(id) => {
        removeGifted(id);
    }
    return (
        <>
            <tr>
                <td>{item.nombre}</td>
                <td>{item.tipo}</td>
                <td>{item.mensaje}</td>
                <td>{item.transferNumber}</td>
                <td><Button variant="danger" onClick={() => removeGift(item.id)}>eliminar</Button></td>
            </tr>
        </>
    );
}

export default GiftedListItem;
