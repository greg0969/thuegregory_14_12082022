import { createSlice } from "@reduxjs/toolkit";

export const employeeSlice = createSlice({
    name: 'employees',
    initialState: {
        employee: []
    },
    reducers: {
        addEmployee: (state, action) => {
            state.employee = [...state.employee, action.payload];
        }
    }
})

export const { addEmployee } = employeeSlice.actions

export default employeeSlice.reducer