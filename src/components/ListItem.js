import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

export default function ListItem({ items,handleChange,employee,id,name,label }) {
  
  
  return (
    <TextField
      fullWidth
      select
      id={id}
      name={ name}
      label={label}
      onChange={handleChange}
      {...console.log(employee)}
      required
      value={employee.name}
      sx={{ textAlign: "left" }}
    >
      {items.map((item, index) => (
        <MenuItem key={index} value={item.name}>
          {item.name}
        </MenuItem>
      ))}
    </TextField>


  )
}