import React, {useState, useContext} from 'react';
import { GListContext } from '../Context/GiftListContext';
import { Card } from 'react-bootstrap';

const GiftCard = ({item}) => {
    const {idSelected, selectId} = useContext(GListContext);

    return (
        <>
            <Card onClick={() => {selectId(item.id)}} style={{ width: '18rem' }} className={(idSelected == item.id) && ("selected")}>
            <Card.Img variant="top " src={item.img} />
            <Card.Body>
                <Card.Title>{item.descripcion}</Card.Title>
            </Card.Body>
            </Card>
        </>
    );
}

export default GiftCard;
