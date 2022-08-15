import { configureStore } from "@reduxjs/toolkit";
import employeeReducer from "./userReducer";

export default configureStore({
    reducer: {
        employees: employeeReducer,
    },
})