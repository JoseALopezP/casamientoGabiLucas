import React from 'react';

const GiftedListItem = ({item}) => {
    return (
        <>
            <tr>
                <td>{item.nombre}</td>
                <td>{item.tipo}</td>
                <td>{item.mensaje}</td>
                <td>{item.transferNumber}</td>
            </tr>
        </>
    );
}

export default GiftedListItem;
