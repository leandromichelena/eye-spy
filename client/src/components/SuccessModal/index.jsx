import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function AddDestModal(props) {

    // add if/else to if destination created successfully, display this modal
    // if destination created unsuccessfully, display other modal

    return (

        <div>
            {/* Successful Modal */}
            <Modal
                {...props}
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton className="modal-title-bg border-dark">
                    <Modal.Title className="modalTitle" id="modal-title">
                        Woohoo!
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="modal-bg">
                    <div>
                        <div className="m-3 text-center align-items-center">
                            <h4 id="modal-body-title">Your destination has been added!</h4>
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

export default AddDestModal;