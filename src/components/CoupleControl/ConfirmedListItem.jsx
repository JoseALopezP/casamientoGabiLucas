import React, {useContext} from 'react';
import { Button } from 'react-bootstrap';
import { ListContext } from '../Context/ListContext';

const ConfirmedListItem = ({item}) => {
    const {removeGuest} = useContext(ListContext);
    return (
        <>
            <tr className={item.dinner ? 'lineaCena' : 'lineaDCena'}>
                <td>{item.dinner ? 'CENA' : 'DESPUES'}</td>
                <td>{item.nombre}</td>
                <td>{item.apellido}</td>
                <td>{item.dni}</td>
                <td>{item.diet}</td>
                <td><Button variant="danger" onClick={() => removeGuest(item.id)}>eliminar</Button></td>
            </tr>
        </>
    );
}

export default ConfirmedListItem;
