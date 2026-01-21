import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Modals(props) {


    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton className="modal-title-bg border-dark">
                <Modal.Title className="modalTitle" id="modal-title">
                    All Comments
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="modal-bg">
                <div>
                    <div className="border-bottom border-dark mb-3">
                        <h4 id="modal-body-title">Username</h4>
                        <p id="modal-body">
                            user's comment
                        </p>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer className="modal-bg border-dark">
                <Button onClick={props.onHide} id="modal-button" className="all-btns">Close</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default Modals;