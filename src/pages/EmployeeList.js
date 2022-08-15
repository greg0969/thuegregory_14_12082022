import React from 'react';
import EmployeesArray from '../components/EmployeesArray';
import Header from '../components/Header';


function EmployeeList() {

    return (
        <div>
            <Header />
            <h1>Liste des employés</h1>
            <EmployeesArray />
        </div>
    )
}

export default EmployeeList;