import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import states from "../data/states.json";
import { useState } from "react";


export default function ListItem({ items}) {


  return (
    
      items.map((item, index) => (
        <MenuItem key={index} value={item.name}  >
          {item.name }
        </MenuItem>
      ))
    

  )
}