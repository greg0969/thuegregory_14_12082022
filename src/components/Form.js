import { useState } from "react";
import { useDispatch } from "react-redux";
import { addEmployee } from "../redux/userReducer";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import states from "../data/states.json";
import departments from "../data/departments.json";
import ListItem from "./ListItem";


function Form({ setVisible, index }) {

  const dispatch = useDispatch();
  const [employee, setEmployee] = useState([]);

  function handleChange(event) {
    const { name, value } = event.target;

    setEmployee({ ...employee, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const data = {
      id: index,
      ...employee,
    };
    setVisible(true);
    dispatch(addEmployee(data));
  }
  // let date = new Date().toISOString().substr(0, 10);

  return (
    <Box
      id="form"
      name="createEmployee"
      component="form"
      onSubmit={handleSubmit}
      sx={{ textAlign: "center", margin: "0 5rem" }}
    >
      <Typography variant="h4" color="#93ad19" sx={{ marginTop: "4rem" }}>
        Create employee
      </Typography>
      <Grid container spacing={3} sx={{ marginTop: "0.5rem" }}>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            id="firstname"
            name="FirstName"
            label="Firstname"
            onChange={handleChange}
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            id="lastname"
            name="LastName"
            label="Lastname"
            onChange={handleChange}
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            type="date"
            id="Birthdate"
            name="Birthdate"
            label="Date of Birth"
            onChange={handleChange}
            value={employee.birthDate}
            InputLabelProps={{
              shrink: true,
            }}
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
            type="date"
            id="Start"
            name="Start"
            label="Starting Date"
            onChange={handleChange}
            value={employee.startDate}
            required

          />
        </Grid>
        <Grid item xs={12} sm={6} >
          <ListItem id={"departments"} items={departments} handleChange={handleChange} employee={employee} name={"Department"} label={"Department"}/>
      
        </Grid>
      </Grid>
      <Typography variant="h4" color="#93ad19" sx={{ marginTop: "3rem" }}>
        Adress
      </Typography>
      <Grid container spacing={3} sx={{ marginTop: "0.5rem" }}>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            id="street"
            name="Street"
            label="Street"
            onChange={handleChange}
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            id="City"
            name="City"
            label="City"
            onChange={handleChange}
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
        <ListItem id={"State"} items={states} handleChange={handleChange} employee={employee} name={"State"} label={"State"}/>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            id="zip"
            name="Zip"
            label="Zipcode"
            onChange={handleChange}
            required
          />
        </Grid>
      </Grid>

      <Button

        type="submit"
        variant="contained"
        sx={{ margin: "2rem auto", width: "250px", backgroundColor: '#93ad19', fontWeight: "bold" }}
      >
        Create Employee
      </Button>
    </Box>
  );
}

export default Form;
