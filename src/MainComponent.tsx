import React from 'react';
import './MainComponent.css';
import TableValues from "./api/database";
import  { Select, SelectChangeEvent, FormControl,MenuItem,InputLabel,Box, Paper, TableRow, TableHead,
TableContainer, TableCell, TableBody, Table, tableCellClasses} from '@mui/material';
import { styled } from '@mui/material/styles';


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
        backgroundColor: theme.palette.action.hover,
    },
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

let citySet = new Set<string>(TableValues.map(e => e.city))
let cityArray = Array.from(citySet)


function MainComponent() {

    const [record, setRecord] = React.useState(TableValues);
    const handleChange = (event: SelectChangeEvent) => {
        if (event.target.value==="All") {
            setRecord(TableValues)
        } else {
            setRecord(TableValues.filter(e=>e.city===event.target.value));
        }
    };

  return (
      <div className='App'>

      <Box sx={{ minWidth: 320 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">City</InputLabel>
          <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Find"
               onChange={handleChange}
          >
              {
                  cityArray.map((value)=>
                      <MenuItem key={value} value={value}>{value}</MenuItem>
              )
              }
              <MenuItem key={"All"} value={"All"}>All</MenuItem>
          </Select>
        </FormControl>
      </Box>

    <TableContainer component={Paper} >
        <Table  aria-label="a dense table">
            <TableHead>
                <TableRow>
                    <StyledTableCell>Username</StyledTableCell>
                    <StyledTableCell align="left">City</StyledTableCell>

                </TableRow>
            </TableHead>
            <TableBody>
                {record.map((row) => (
                    <StyledTableRow
                        key={row.name}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <StyledTableCell component="th" scope="row">
                            {row.name}
                        </StyledTableCell>
                        <StyledTableCell align="left">{row.city}</StyledTableCell>
                    </StyledTableRow>
                ))}
            </TableBody>
        </Table>
    </TableContainer>
      </div>
  );
}

export default MainComponent;
