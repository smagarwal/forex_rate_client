import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
 
  '&:nth-of-type(odd)': {
    backgroundColor: 'lightblue',
    
  },
  '&:nth-of-type(even)': {
    backgroundColor: 'white',
   
  }

}));



export default function CustomizedTables({rows, displayCurr}) {

  const tableTitle = displayCurr.split('/');

  return (
    <TableContainer component={Paper} sx= { {marginLeft: 'auto', marginRight: 'auto' }}>
      <Table sx={{minWidth: 300 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center"> Hrs </StyledTableCell>
            <StyledTableCell align="center"> 
            Rate <br />
            {tableTitle[1]+ ' = 1 ' + tableTitle[0] }
            
             </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell align="center"> {row.hrs}  </StyledTableCell>
              <StyledTableCell align="center"> {row.rate} </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}