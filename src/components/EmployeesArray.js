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
import visuallyHidden from "@mui/utils/visuallyHidden";
import { TableSortLabel } from '@mui/material';
import { Box } from '@mui/system';


export default function EmployeesArray() {


    const TableColumns = [
        { id: "FirstName", label: "First Name", minWidth: 100 },
        { id: "LastName", label: "Last Name", minWidth: 100 },
        { id: "Birthdate", label: "Date of Birth", minWidth: 100 },
        { id: "Start", label: "Start Date", minWidth: 100 },
        { id: "Department", label: "Department", minWidth: 100 },
        { id: "Street", label: "Street", minWidth: 100 },
        { id: "City", label: "City", minWidth: 100 },
        { id: "State", label: "State", minWidth: 100 },
        { id: "Zip", label: "Zip Code", minWidth: 100 },
    ];

    const employees = useSelector((state) => state.employees.employee);

    const createData = (id, FirstName, LastName, Birthdate, Start, Department, Street, City, State, Zip) => {
        return { id, FirstName, LastName, Birthdate, Start, Department, Street, City, State, Zip };
    }

    const rows = employees.map((user) =>
        createData(
            user.id,
            user.FirstName,
            user.LastName,
            user.Birthdate,
            user.Start,
            user.Department,
            user.Street,
            user.City,
            user.State,
            user.Zip
        )
    );


    const [order, setOrder] = React.useState("asc");
    const [orderBy, setOrderBy] = React.useState("id");
    const [filteredRows, setFilteredRows] = React.useState(rows);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const getComparator = (order, orderBy) => {
        return order === "desc"
            ? (a, b) => descendingComparator(a, b, orderBy)
            : (a, b) => -descendingComparator(a, b, orderBy);
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === "asc";
        setOrder(isAsc ? "desc" : "asc");
        setOrderBy(property);
    };

    const createSortHandler = (property) => (event) => {
        handleRequestSort(event, property);
    };

 
    const descendingComparator = (a, b, orderBy) => {
        if (b[orderBy] < a[orderBy]) {
            return -1;
        }
        if (b[orderBy] > a[orderBy]) {
            return 1;
        }
        return 0;
    };


    return (
        <Paper
            sx={{ width: "95%", overflow: "hidden", margin: "2.5em" }}
            align="center"
        >
            <TableContainer sx={{ maxHeight: 440 }}>
                <Table size="small" stickyHeader>
                    <TableHead>
                        <TableRow>
                            {TableColumns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth }}
                                    sortDirection={orderBy === column.id ? order : false}
                                >
                                    <TableSortLabel
                                        active={orderBy === column.id}
                                        direction={orderBy === column.id ? order : "asc"}
                                        onClick={createSortHandler(column.id)}
                                    >
                                        {column.label}
                                        {orderBy === column.id ? (
                                            <Box component="span" sx={visuallyHidden}>
                                                {order === "desc"
                                                    ? "sorted descending"
                                                    : "sorted ascending"}
                                            </Box>
                                        ) : null}
                                    </TableSortLabel>
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {filteredRows
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .sort(getComparator(order, orderBy))
                            .map((row, i) => {
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={i}>
                                        {TableColumns.map((column) => {
                                            const value = row[column.id];
                                            return (
                                                <TableCell
                                                    key={`${column.id}-${i}`}
                                                    align={column.align}
                                                >
                                                    {column.format && typeof value === "number"
                                                        ? column.format(value)
                                                        : value}
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
                rowsPerPageOptions={[10, 25, 50, 100]}
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