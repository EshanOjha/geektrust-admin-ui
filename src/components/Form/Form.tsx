import * as React from 'react'
import { useStyles } from './styles'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useGlobalContext } from "../../context/Context";

function FormComp() {
    const classes = useStyles()
    const { userList, filterUsers, inputValue, setInputValue } = useGlobalContext();
    const handleOnchange = (e:any) => {

        const input = e.target.value.toLocaleLowerCase();
        
        const filteredList = userList.filter((list:any) => {
          const name = list.name.toLocaleLowerCase();
          const email = list.email.toLocaleLowerCase();
          const role = list.role.toLocaleLowerCase();
        
          return (
            name.startsWith(input) ||
            email.startsWith(input) ||
            role.startsWith(input)
          );
        });
      
        // Send the entered strin for filtering the User list and display the results
        filterUsers(filteredList);
        setInputValue(input);
      }
    const createFormComp = () => {
      return (
       <>
        <h2>Admin UI</h2>
        <Box component="form" noValidate
            autoComplete="off">
        <TextField
            className={classes.textField}
            required
            id="outlined-required"
            label="Search by name, email or role"
            defaultValue=""
            value={inputValue}
            onChange={handleOnchange}
        />
        </Box>
      </>
     )
}
    return <>{createFormComp()}</>
}


const Form = FormComp

export { Form }