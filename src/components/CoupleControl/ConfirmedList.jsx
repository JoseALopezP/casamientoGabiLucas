import React, {useContext, useEffect} from 'react';
import { ListContext } from '../Context/ListContext';
import { Table } from 'react-bootstrap';
import ConfirmedListItem from './ConfirmedListItem';

const ConfirmedList = () => {
    const {list, updateList} = useContext(ListContext);
    useEffect(() =>{
        updateList();
    }, [])
    return (
        <div>
            <h3>LISTA DE CONFIRMADOS</h3>
            <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                <th> - </th>
                <th>NOMBRE</th>
                <th>APELLIDO</th>
                <th>DNI</th>
                <th>DIETA</th>
                <th>ELIMINAR</th>
                </tr>
            </thead>
            <tbody>
                {list.map( (itm) => {
                    return(
                        <ConfirmedListItem item={itm} key={itm.id}/>
                    );
                })}
            </tbody>
            </Table>
        </div>
    );
}

export default ConfirmedList;
