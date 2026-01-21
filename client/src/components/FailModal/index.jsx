import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function FailModal(props) {
    
    return (

        <div>
            {/* Fail Modal */}
            <Modal
                {...props}
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton className="modal-title-bg border-dark">
                    <Modal.Title className="modalTitle" id="modal-title">
                        Oh No!
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="modal-bg">
                    <div>
                        <div className="m-3 text-center align-items-center">
                            <h4 id="modal-body-title">Something went wrong, please try again!</h4>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer className="modal-bg border-dark">
                    <Button onClick={props.onHide} id="modal-button" className="all-btns">Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default FailModal;