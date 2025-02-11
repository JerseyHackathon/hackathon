"use client";

import * as React from 'react';
import { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Container, TextField, Typography } from '@mui/material';
import MenuDropDown from './MenuDropDown'
import AiChef from './aiFeatures'
// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

const data = [
    {
      distribution_date: '2/21/25',
      food_type: 'CANNED VEGETABLES',
      quantity: '2',
      food_name: 'Green Beans',
      calories: "34",
      reserve: true
    },
    {
      distribution_date: '2/25/25',
      food_type: 'CANNED FRUITS',
      quantity: '1',
      food_name: 'Strawberries',
      calories: "34",
      reserve: true
    }, {
      distribution_date: '2/27/25',
      food_type: 'HOT AND COLD CEREALS',
      quantity: '4',
      food_name: 'Cocopuffs',
      calories: "34",
      reserve: false
    }, {
      distribution_date: '2/28/25',
      food_type: 'RICE/PASTA',
      quantity: '1',
      food_name: 'White rice',
      calories: "34",
      reserve: false
    }, {
      distribution_date: '2/29/25',
      food_type: 'CANNED MEATS',
      quantity: '5',
      food_name: 'Tuna',
      calories: "34",
      reserve: true
    },
    {
      distribution_date: '2/30/25',
      food_type: 'CANNED VEGETABLES',
      quantity: '3',
      food_name: 'Green Beans',
      calories: "34",
      reserve: true
    }
  ];
  const FoodListTable: React.FC = () => {
  const [filterQuery, setFilterQuery] = useState('');
  const [filteredRows, setFilteredRows] = useState(data);
  const [column, setColumn] = useState("distribution_date")
  const [updateMeals, setUpdateMeals] = useState("")
  // const apiKey = process.env.NEXT_PUBLIC_OPENAI_API_KEY
  const apiKey = `${process.env.NEXT_PUBLIC_OPENAI_API_KEY}`
  {console.log("api key is: ", apiKey)}
  const handleFilterChange = (event) => {
    const query = event.target.value;
    setFilterQuery(query);

    const filteredData = data.filter(
      (row) =>
          row[`${column}`].toLowerCase().startsWith(query.toLowerCase())
  );
    setFilteredRows(filteredData);
  }
  return (
    <>

    <Container sx={{ marginTop: 15}}>
   
    <Typography variant="h4"   sx={{ marginBottom: 10, color: "#008CBA", fontWeight:"bold" }}>Food Available for pickup</Typography>
    {/* <MenuDropdown option1="DEVCLASS" option2="Object_Type" option3="Custom_Object_Name" setColumn={setColumn}/> */}
    <AiChef apiKey={apiKey} onUpdateMeals={setUpdateMeals} food={data}/>
    <MenuDropDown option1="distribution_date" option2="food_type" option3="food_name" setColumn={setColumn} />
    

    <TextField
    size="small"
        label={`Enter ${column}`}
        variant="outlined"
        value={filterQuery}
        onChange={handleFilterChange}
        style={{ marginBottom: '20px' }}
      />
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
          
            <TableCell style={{ fontWeight: 'bold' }} align="center">Distribution Date</TableCell>
            <TableCell style={{ fontWeight: 'bold' }}  align="center">Food Category</TableCell>
            <TableCell style={{ fontWeight: 'bold' }}  align="center">Quantity [per person]</TableCell>
            <TableCell style={{ fontWeight: 'bold' }}  align="center">Food Name</TableCell>
            <TableCell style={{ fontWeight: 'bold' }}  align="center">Calories [per unit]</TableCell>
            <TableCell style={{ fontWeight: 'bold' }}  align="center">Reserve</TableCell>
           
            {/* <TableCell  style={{ fontWeight: 'bold' }} align="center"></TableCell>
            <TableCell style={{ fontWeight: 'bold' }}  align="center">Object Type</TableCell>

            <TableCell style={{ fontWeight: 'bold' }}  align="center">SAP Interface Object Name</TableCell>
            <TableCell style={{ fontWeight: 'bold' }}  align="center">App Area</TableCell>
            <TableCell  style={{ fontWeight: 'bold' }} align="center">SAP Package</TableCell> */}

          </TableRow>
        </TableHead>
        <TableBody>
          {filteredRows.map((row, count) => (
            <TableRow
              key={count}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              {/* <TableCell>
                {row.name}
              </TableCell> */}
              <TableCell align="center">{row.distribution_date}</TableCell>
              <TableCell align="center">{row.food_type}</TableCell>
              <TableCell align="center">{row.quantity}</TableCell>
              <TableCell align="center">{row.food_name}</TableCell>
              <TableCell align="center">{row.calories}</TableCell>
              <TableCell align="center"> <Button disabled={row.reserve}>Reserve</Button></TableCell>
            
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Container>
    </>
  );
}

export default FoodListTable;