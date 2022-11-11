import React, {useContext} from 'react';
import { GListContext } from '../Context/GiftListContext';
import { Card } from 'react-bootstrap';

const GiftCard = ({item, clicked}) => {
    const {idSelected, selectId} = useContext(GListContext);
    const onClickHandler = () => {
        selectId(item.id);
        clicked();
    }
    return (
        <>
            <Card onClick={() => {onClickHandler()}} style={{ width: '18rem' }} className={(idSelected === item.id) && ("selected")}>
            <Card.Img variant="top " src={item.img} />
            <Card.Body>
                <Card.Title>{item.descripcion}</Card.Title>
            </Card.Body>
            </Card>
        </>
    );
}

export default GiftCard;
