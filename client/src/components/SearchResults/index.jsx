import React, { useState } from 'react';

// component imports
import Modals from '../Modals';

// bootstrap imports
import Button from 'react-bootstrap/Button';

// image import
import placeholderImg from '../../images/about-us-hiking-img.png'

function SearchResults(props) {

    // useState variables for modals
    const [modalShow, setModalShow] = React.useState(false);

    return (
        // placeholder cards that will be filled with data from the backend
        <div className="container p-5 mb-5">
            <div className="">
                <h1 className="mb-5 pb-3 border-bottom border-dark header-font text-center">Placeholder Activity Title</h1>
            </div>
            <div className="card col-4 p-3 shadow-lg floating-box-bg">
                <img src={placeholderImg} className="card-img-top rounded" alt="..." />
                <div className="card-body">
                    <h5 className="card-title text-center">Placeholder Title</h5>
                    <p className="card-text text-center">Description -- only allow card to show first 50 characters of description</p>
                </div>
                <ul className="list-group list-group-flush text-center">
                    <li className="list-group-item floating-box-bg">Category</li>
                    <li className="list-group-item floating-box-bg">Address/Location Name</li>
                </ul>
                {/* Add Comment */}
                <div className="mt-2 text-center">
                    <label htmlFor="validationTextarea" className="form-label">Comments</label>
                    <textarea className="form-control" id="add-comment" placeholder="Add A Comment" name="add-comment" type="text" rows="3" style={{ height: "100%" }}></textarea>
                </div>
                < br />
                <div className="card-body text-center">
                    {/* Open Modal */}
                    <Button variant="primary" className="all-btns p-2 rounded" onClick={() => setModalShow(true)}>
                        Show all comments
                    </Button>

                    <Modals
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                    ></Modals>
                </div>
            </div>
            < br />
            < br />
            < br />
            < br />
        </div>
    )
}

export default SearchResults;