import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import ModalConfirmation from './ModalConfirmation';

const Confirmation = (qDinner) => {
    const [modalShow, setModalShow] = useState(false);
    return (
        <>
           <Button variant="primary" onClick={() => setModalShow(true)}>
                Launch vertically centered modal
            </Button>
            <ModalConfirmation show={modalShow} onHide={() => setModalShow(false)} qdinner={qDinner}/>
        </>
    );
}

export default Confirmation;