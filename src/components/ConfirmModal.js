import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addEmployee } from "../redux/userReducer";


function ConfirmModal({ setVisible }) {

    const navigate = useNavigate();

    function closeModal() {
        setVisible(false)
        navigate("/employeeList")
    }
    
    
    return (
       
        <div className="form-container">
            <h4>You added a new employee</h4>
            <button onClick={closeModal}>Ok</button>
        </div>
    )
}

export default ConfirmModal