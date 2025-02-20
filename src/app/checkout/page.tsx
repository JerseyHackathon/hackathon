"use client"
import { Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'

function Checkout() {
    const [data, setData] = useState([]);

    useEffect(() => {
      // Retrieve the data from localStorage when the component mounts
      const storedData = localStorage.getItem('dataArray');
      console.log(storedData)
      if (storedData) {
        setData(JSON.parse(storedData)); // Parse the data and update state
        
      }
      
    }, []);
  return (
    <Container>
          <Typography
        variant="h4"
        sx={{ marginBottom: 5, color: "#008CBA", fontWeight: "bold" }}
      >
        Your Food Reservation is confirmed.
      </Typography>
          <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell style={{ fontWeight: "bold" }} align="center">
                Distribution Date
              </TableCell>
              <TableCell style={{ fontWeight: "bold" }} align="center">
                Food Type
              </TableCell>
              <TableCell style={{ fontWeight: "bold" }} align="center">
                Quantity[per person]
              </TableCell>
              <TableCell style={{ fontWeight: "bold" }} align="center">
                Food Name
              </TableCell>
              <TableCell style={{ fontWeight: "bold" }} align="center">
                Calories [per unit]
              </TableCell>
             
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, count) => (
              <TableRow
                key={count}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center">{row.distribution_date}</TableCell>
                <TableCell align="center">{row.food_type}</TableCell>
                <TableCell align="center">{row.quantity}</TableCell>
                <TableCell align="center">{row.food_name}</TableCell>
                <TableCell align="center">{row.calories}</TableCell>
                {/* <TableCell align="center"> <Button  onClick={() => handleReserveClick(row)}
                disabled={row.reserved} variant="text">Add Item</Button></TableCell> */}

              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

    </Container>
  )
}

export default Checkout