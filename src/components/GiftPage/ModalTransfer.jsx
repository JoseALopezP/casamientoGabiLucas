import React from 'react';
import Modal from 'react-bootstrap/Modal';
import TransferBody from './TransferBody';

const ModalTransfer = (show, onHide) => {
    return (
        <>
            <Modal {...show} {...onHide} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                Aquí tienes nuestros datos
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <TransferBody/>
            </Modal.Body>
            </Modal>
        </>
    );
}

export default ModalTransfer;
