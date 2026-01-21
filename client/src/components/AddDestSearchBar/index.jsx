import React from 'react';

function AddDestSearchBar() {

    return (
        <div>
            <div className="text-center">
                {/* <label htmlFor="activity" className="all-btns p-2 rounded px-5">
                    Select an outdoor activity
                </label> */}
                <select name="activity" className="category-btn p-2 rounded" placeholder='Select an outdoor activity' style={{ width: "100%" }}>
                    <option value="" className="text-center" disabled>Select an outdoor activity</option>
                    <option value="hiking" id="search-bar-hiking" className="text-center">Hiking Trails</option>
                    <option value="camping" id="search-bar-camping" className="text-center">Camping</option>
                    <option value="biking" id="search-bar-biking" className="text-center">Mountain Biking</option>
                    <option value="swimming" id="search-bar-swimming" className="text-center">Swimming</option>
                    <option value="water-sport" id="search-bar-water-sport" className="text-center">Water Sports</option>
                </select>
            </div>
        </div>
    )
}

export default AddDestSearchBar;