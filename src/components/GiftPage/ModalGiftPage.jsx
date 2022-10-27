import React from 'react';
import Modal from 'react-bootstrap/Modal';
import GiftPageBody from './GiftPageBody';

const ModalGiftPage = (show, onHide) => {
    return (
        <>
            <Modal {...show} {...onHide} size="lg" aria-labelledby="contained-modal-title-vcenter modalGifts" centered>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                Elige el regalo que quieras hacer
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <GiftPageBody/>
            </Modal.Body>
            </Modal>
        </>
    );
}

export default ModalGiftPage;
