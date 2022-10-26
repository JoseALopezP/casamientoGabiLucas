import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import ModalConfirmation from './ModalConfirmation';

const Confirmation = () => {
    const [modalShow, setModalShow] = useState(false);
    return (
        <>
           <Button variant="outline-warning" onClick={() => setModalShow(true)}>
                CONFIRMAR ASISTENCIA
            </Button>
            <ModalConfirmation show={modalShow} onHide={() => setModalShow(false)} />
        </>
    );
}

export default Confirmation;