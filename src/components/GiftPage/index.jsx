import React, {useState} from 'react';
import './index.css';
import ModalGiftPage from './ModalGiftPage';
import ModalTransfer from './ModalTransfer';
import Button from 'react-bootstrap/Button';

const GiftPage = () => {
    const [modalShow2, setModalShow2] = useState(false);
    const [modalShow3, setModalShow3] = useState(false);
    return (
        <div className='giftPageBlock'>
            <div className="giftsTextBlock">
                <h4>SI QUIERES AYUDARNOS...</h4>
                <p>El mejor regalo es tu presencia, pero si nos querés ayudar en nuestro nuevo camino sugerimos de 2 formas:</p>
            </div>
            <div className="transferBtnBlock">
                <Button variant="outline-warning transferBtn" onClick={() => setModalShow2(true)}>
                    TRANSFERENCIA
                </Button>
                <ModalTransfer show={modalShow2} onHide={() => setModalShow2(false)} />
            </div>
            <div className="giftsBtnBlock">
                <Button variant="outline-warning giftsBtn" onClick={() => setModalShow3(true)}>
                    LISTA DE REGALOS
                </Button>
                <ModalGiftPage show={modalShow3} onHide={() => setModalShow3(false)} />
            </div>
        </div>
    );
}

export default GiftPage;
