import React, { useState } from "react";

// component imports
import AddDestSearchBar from "../components/AddDestSearchBar";
import AddDestModal from "../components/SuccessModal";

// bootstrap imports
import Button from "react-bootstrap/Button";

function AddDestination() {
  // useState variables for modals
  const [modalShow, setModalShow] = React.useState(false);

  // add a conditional statement so that all items in add-destination can be saved on click
  // create a formhandler?

  // Image Preview
  const loadFile = function (event) {
    const reader = new FileReader();
    reader.onload = function () {
      const output = document.getElementById("output");
      output.src = reader.result;
    };
    reader.readAsDataURL(event.target.files[0]);
  };

  return (
    <div>
      <div className="container p-5 mb-5">
        <div className="">
          <div>
            <h1 className="text-center mb-5 pb-3 border-bottom border-dark header-font">
              Add Destination
            </h1>
          </div>
          <form className="container d-flex justify-content-center">
            <div className="">
              <div className="row justify-content-center">
                <div className="col-5 p-4 m-2 rounded shadow-lg floating-box-bg">
                  <div className="pb-2">
                    <label className="form-label">Title</label>
                    <input
                      id="destination-title"
                      className="form-control"
                      placeholder="Title"
                      name="title"
                      type="text"
                    ></input>
                  </div>
                  <div className="">
                    <label className="form-label">Address</label>
                    <input
                      id="destination-address"
                      className="form-control"
                      placeholder="Address"
                      name="address"
                      type="text"
                    ></input>
                  </div>
                </div>
                <div className="col-5 p-4 m-2 rounded shadow-lg floating-box-bg">
                  <div className="">
                    <label htmlFor="validationTextarea" className="form-label">
                      Description
                    </label>
                    <textarea
                      className="form-control is-invalid"
                      id="validationTextarea"
                      placeholder="Please enter a brief description"
                      name="description"
                      type="text"
                      rows="5"
                      style={{ height: "100%" }}
                      required
                    ></textarea>
                  </div>
                </div>
                <div className="col-5 m-2 rounded shadow-lg floating-box-bg">
                  <div>
                    <h4 className="text-center my-4 pb-3 border-bottom border-dark subHeader-font">
                      Please Select A Category
                    </h4>
                    <AddDestSearchBar />
                  </div>
                </div>
                {/* upload image */}
                <div className="col-5 m-2 text-center rounded shadow-lg floating-box-bg">
                  <h4 className="text-center my-4 pb-3 border-bottom border-dark subHeader-font">
                    Upload A Photo
                  </h4>
                  <div className="text-center">
                    <label htmlFor="file" className="File"></label>
                    <input
                      className="text-center"
                      type="file"
                      id="img-file"
                      name="file"
                      accept="image/*"
                      required
                      onChange={loadFile}
                    />
                    <div className="col-12">
                      {/* warning bc react wants an alt in the img element (alt is not necessary) */}
                      <img
                        id="output"
                        className="m-3 "
                        style={{ height: "250px" }}
                        alt="..."
                      />
                    </div>
                  </div>
                </div>

                {/* Open Modal */}
                <Button
                  className="all-btns m-2 p-2 rounded text-center col-4"
                  onClick={() => setModalShow(true)}
                >
                  Add Destination
                </Button>
                <AddDestModal
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                ></AddDestModal>
              </div>
            </div>
          </form>
        </div>
        <br />
        <br />
        <br />
      </div>
    </div>
  );
}

export default AddDestination;
