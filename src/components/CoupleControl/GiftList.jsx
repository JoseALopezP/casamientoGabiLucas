import React, {useContext, useEffect} from 'react';
import { Table } from 'react-bootstrap';
import { GListContext } from '../Context/GiftListContext';
import GListItem from './GListItem';

const GiftList = () => {
    const {gList, updateGList} = useContext(GListContext);
    useEffect(() =>{
        updateGList()
    }, [])
    return (
        <div>
            <h3>LISTA DE REAGALOS</h3>
            <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                <th>IMG</th>
                <th>TIPO</th>
                <th>STATUS</th>
                <th>ELIMINAR</th>
                </tr>
            </thead>
            <tbody>
                {gList.map( (itm) => {
                    return(
                        <GListItem item={itm} key={itm.id}/>
                    );
                })}
            </tbody>
            </Table>
        </div>
    );
}

export default GiftList;
