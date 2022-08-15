import { useState } from "react";
import { useDispatch } from "react-redux";
import { addEmployee } from "../redux/userReducer";


function ConfirmModal({ visible,setVisible }) {


    return (
        <div className="form-container">
            <h2>You added a new employee</h2>
            {visible && <button onClick={setVisible(false)}>Ok</button>}
        </div>
    )
}

export default ConfirmModal