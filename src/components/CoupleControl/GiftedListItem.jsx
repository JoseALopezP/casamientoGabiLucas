import React, {useState, useContext} from 'react';
import { GiftedListContext } from '../Context/GiftedListContext';
import { GListContext } from '../Context/GiftListContext';


const GiftedListItem = ({item}) => {

    const {selectGift, gList} = useContext(GListContext);
    const {giftedList, removeGifted} = useContext(GiftedListContext);
    const {gifted, setGifted} = useState(0);
    const removeGift = async(id) => {
        for(const element of giftedList){
            if(element.nombre == item.nombre){
                setGifted = gifted + 1;
            }
        }
        if(gifted > 1){
            removeGifted(id);
        }else{
            for(const element of gList){
                element.descripcion == item.nombre;
                
            }
        }
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
