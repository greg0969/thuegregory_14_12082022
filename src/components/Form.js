import { useState } from "react";
import { useDispatch } from "react-redux";
import { addEmployee } from "../redux/userReducer";


function Form({ visible, setVisible,index }) {

    const dispatch = useDispatch();
    const [employee, setEmployee] = useState([]);

    function handleChange(event) {
        const { name, value } = event.target
        setEmployee({ ...employee, [name]: value })
    };

    function handleSubmit(event) {
        event.preventDefault();
        const data = {
            id: index,
            ...employee,
        };
        setVisible(true);
        dispatch(addEmployee(data));
    };

    let date = new Date().toISOString().substr(0, 10);

    return (
        <div className="form-container">
            <h2>Create new employee</h2>
            <form onSubmit={handleSubmit}>
                <div className="input-container">
                    <div className="input-wrapper">
                        <label htmlFor="username">First Name</label>
                        <input
                            type="text"
                            name='FirstName'
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="input-wrapper">
                        <label >Last Name</label>
                        <input
                            type="text"
                            name='LastName'
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="input-wrapper">
                        <label >Date of Birth</label>
                        <input
                            type="date"
                            name='Birthdate'
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="input-wrapper">
                        <label >Start Date</label>
                        <input
                            type="date"
                            name='Start'
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="input-wrapper">
                    <label >Department</label>
                    <select name="Department">
                        <option value="">1</option>
                        <option value="">2</option>
                        <option value="">3</option>
                        <option value="">4</option>
                    </select>
                </div>
                </div>

                <div className="address">
                    <h2>Address</h2>
                    <div className="input-wrapper">
                        <label >Street</label>
                        <input
                            type="text"
                            name='Street'
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="input-wrapper">
                        <label >City</label>
                        <input
                            type="text"
                            name='City'
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="input-wrapper">
                        <label >State</label>
                        <select name='State'>
                            <option value="">1</option>
                            <option value="">2</option>
                            <option value="">3</option>
                            <option value="">4</option>
                        </select>
                    </div>
                    <div className="input-wrapper">
                        <label>Zip Code</label>
                        <input
                            type="number"
                            name='Zip'
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>
                

                <button type="submit" className="save-button" >
                    Create
                </button>
            </form>
        </div>
    )
}

export default Form