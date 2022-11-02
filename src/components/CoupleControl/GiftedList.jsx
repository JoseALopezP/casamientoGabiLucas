import React, {useContext, useEffect} from 'react';
import { Table } from 'react-bootstrap';
import { GiftedListContext } from '../Context/GiftedListContext';
import GiftedListItem from './GiftedListItem';


const GiftedList = () => {
    const {giftedList, updateGiftedList} = useContext(GiftedListContext);
    useEffect(() =>{
        updateGiftedList()
    }, [])
    return (
        <div>
            <h3>LISTA DE REAGALOS CONFIRMADOS</h3>
            <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                <th>NOMBRE</th>
                <th>TIPO</th>
                <th>MENSAJE</th>
                <th>TRANSFERENCIA #</th>
                <th>BORRAR</th>
                </tr>
            </thead>
            <tbody>
                {giftedList.map( (itm) => {
                    return(
                        <GiftedListItem item={itm} key={itm.id}/>
                    );
                })}
            </tbody>
            </Table>
        </div>
    );
}

export default GiftedList;
