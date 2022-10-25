import React from 'react';
import Modal from 'react-bootstrap/Modal';
import PopConfirmationBlock from './PopConfirmationBlock';

const ModalConfirmation = (show, onHide, qdinner) => {
    return (
        <>
            <Modal {...show} {...onHide} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                Ingresa tus datos para confirmar asistencia
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <PopConfirmationBlock/>
            </Modal.Body>
            </Modal>
        </>
    );
}

export default ModalConfirmation;
