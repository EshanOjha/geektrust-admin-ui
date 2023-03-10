import React from "react";
import { useGlobalContext } from "../../context/Context";
import TableList from "./TableList";
//import "./Table.css";
//import CheckBox from "./Checkbox";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
//import { useStyles } from './styles'
import { makeStyles } from '@material-ui/core/styles'
import './TableComponent.css'

interface Data {
  name: string;
  email: string;
  role: string;
  actions: null;
}


interface HeadCell {
  disablePadding: boolean;
  id: keyof Data;
  label: string;
  numeric: boolean;
}

const headCells: readonly HeadCell[] = [
  {
    id: 'name',
    numeric: false,
    disablePadding: true,
    label: 'Name',
  },
  {
    id: 'email',
    numeric: true,
    disablePadding: false,
    label: 'Email',
  },
  {
    id: 'role',
    numeric: true,
    disablePadding: false,
    label: 'Role',
  },
  {
    id: 'actions',
    numeric: true,
    disablePadding: false,
    label: 'Actions',
  }
];


function EnhancedTableHead() {
  return (
    <TableHead className="header">
      <TableRow>
        <TableCell padding="checkbox">
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align='left'
            padding='normal'>
              {headCell.label}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

function TableComponent() {
  const { pagination, currPage } = useGlobalContext();

  return (
      <TableContainer component={Paper} className="userTable">
       <Table
            stickyHeader
            aria-label="Admin Table" 
            sx={{ minWidth: 750 }}
            aria-labelledby="Admin Table"
            size={'medium'}
          >
          <EnhancedTableHead />
            <TableBody>
            {pagination[currPage].map((list:any,index: number) => {
              return (
                <TableList
                  key={list.id}
                  id={list.id}
                  name={list.name}
                  email={list.email}
                  role={list.role}
                />
              );
            })}
            </TableBody>
       </Table>  
       </TableContainer>
  )
}

const AdminTable = TableComponent

export { AdminTable }