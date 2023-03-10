import React, { useRef }  from "react";
import {Button} from '../ButtonComponent'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useGlobalContext } from "../../context/Context";
import { Input } from "../Input";
import { CheckBox } from '../Checkbox';
import { TableCell, TableRow } from "@mui/material";
import './TableComponent.css'
//import Checkbox from '@mui/material/Checkbox';
import '../admin.css'

export interface TableProps {
    id: string;
    name: string;
    email: string;
    role: string;
  }


function TableList(props: TableProps) {
  const { id, name, email, role } = props;
  const { editUser } = useGlobalContext();
  const label = { inputProps: { 'aria-label': 'Checkbox' } };
  const userId = editUser["id"];
  const inputNameRef = useRef<HTMLInputElement>(null);
  const inputEmailRef = useRef<HTMLInputElement>(null);
  const inputRoleRef = useRef<HTMLInputElement>(null);

  return (
    <TableRow>
      <TableCell>
        <CheckBox id={`checkBox-${id}`} value={id} />
      </TableCell>
      <TableCell id={`rowName-${id}`}> 
        {
          (userId === id) ? <div>
            <Input ref={inputNameRef} id={id} idValue={`nameEdit-${id}`} value={name} />
          </div> : <div>{name}</div> 
        }
      </TableCell>
      <TableCell id={`rowEmail-${id}`}>
        {
          (userId === id) ? <div>
            <Input ref={inputEmailRef} id={id} idValue={`emailEdit-${id}`} value={email} />
          </div> : <div>{email}</div> 
        }
      </TableCell>
      <TableCell id={`rowRole-${id}`}>
        {
          (userId === id) ? <div>
            <Input ref={inputRoleRef} id={id} idValue={`roleEdit-${id}`} value={role} />
          </div> : <div>{role}</div> 
        }
      </TableCell>
      <TableCell className="actionCell">
         <Button className="edit-btn icons" text="edit" id={id}>
            <EditIcon />
          </Button>
         <Button className="icons delete-icon" text="delete" id={id}>
            <DeleteIcon />
          </Button>
      </TableCell>
    </TableRow>
  );
}

export default TableList;