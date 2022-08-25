import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { useSelector } from 'react-redux';


export default function EmployeesArray(index) {

    const employees = useSelector((state) => state.employees.employee);

    const columns = [
        { id: 'FirstName', label: 'FirstName', minWidth: 100 },
        { id: 'LastName', label: 'LastName', minWidth: 100 },
        { id: 'Start Date', label: 'Start', minWidth: 100 },
        { id: 'Department', label: 'Department', minWidth: 100 },
        { id: 'Date of Birth', label: 'Birthdate', minWidth: 100 },
        { id: 'Street', label: 'Street', minWidth: 100 },
        { id: 'City', label: 'City', minWidth: 100 },
        { id: 'State', label: 'State', minWidth: 100 },
        { id: 'Zip Code', label: 'Zip', minWidth: 100 },

    ];

    const createData = (id,FirstName, LastName, Birthdate, Start, Department, Street, City, State, Zip) => {
        return {id, FirstName, LastName, Birthdate, Start, Department, Street, City, State, Zip };
    }
    
    const rows = employees.map((employee) =>

        createData(
            employee.id,
            employee.FirstName,
            employee.LastName,
            employee.Birthdate,
            employee.Start,
            employee.Department,
            employee.Street,
            employee.City,
            employee.State,
            employee.Zip
        )
    );

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    console.log(employees)

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row) => {
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                                        {columns.map((column) => {
                                            const value = row[column.label];
                                            return (
                                                <TableCell key={column.id}>
                                                    {value}
                                                </TableCell>
                                            );
                                        })}
                                    </TableRow>
                                );
                            })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    );
}
