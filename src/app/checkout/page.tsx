"use client";

import { 
    Button,
  Container, 
  Paper, 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow, 
  Typography 
} from "@mui/material";
import React, { useEffect, useState } from "react";

function Checkout() {
  const [data, setData] = useState([]);
  const [pantry, setPantry] = useState("");
  const [renderCount, setRenderCount] = useState(0); 

  useEffect(() => {
    // Retrieve the data from localStorage when the component mounts
    const storedData = localStorage.getItem("dataArray");
    const pantryname = localStorage.getItem("pantryname");

    if (storedData) {
      setData(JSON.parse(storedData)); // Parse the data and update state
      setPantry(JSON.parse(pantryname));
    }
  }, []);

  const handleReserveClick = (data)=>{
    data.delivery = true;
    setRenderCount(1)
  }

  return (
    <div
      className="relative min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/foodincart.webp')" }}
    >
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <Container 
        maxWidth="md" 
        sx={{ 
          position: "relative", // Ensures it stays above the overlay
          py: 6, 
          zIndex: 10 
        }}
      >
        {/* Header Message */}
        <Paper
          elevation={3}
          sx={{
            padding: 4,
            textAlign: "center",
            backgroundColor: "rgba(255, 255, 255, 0.9)", // Semi-transparent white
            borderRadius: "12px",
          }}
        >
          <Typography 
            variant="h4" 
            sx={{ color: "#008CBA", fontWeight: "bold", mb: 2 }}
          >
            
            Your Food Reservation is Confirmed!

          </Typography>
          <Typography variant="h6" sx={{ color: "#333" }}>
            Please pick up at: <strong>{pantry}</strong>
          </Typography>
        </Paper>

        {/* Table with Food Details */}
        <TableContainer 
          component={Paper} 
          sx={{ 
            mt: 4, 
            borderRadius: "12px", 
            overflow: "hidden", 
            boxShadow: 3,
            backgroundColor: "rgba(255, 255, 255, 0.95)" // Slightly transparent white
          }}
        >
          <Table sx={{ minWidth: 650 }}>
            <TableHead sx={{ backgroundColor: "#008CBA" }}>
              <TableRow>
                {["Distribution Date", "Quantity [per person]", "Food Name", "Calories [per unit]", "Make Delivery"].map(
                  (header, index) => (
                    <TableCell 
                      key={index} 
                      align="center" 
                      sx={{ fontWeight: "bold", color: "white", py: 2 }}
                    >
                      {header}
                    </TableCell>
                  )
                )}
              </TableRow>
            </TableHead>
            <TableBody>
              {data.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={5} align="center" sx={{ py: 4, color: "#777" }}>
                    No reservation details available.
                  </TableCell>
                </TableRow>
              ) : (
                data.map((row, count) => (
                  <TableRow key={count} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                    <TableCell align="center">{row.distribution_date}</TableCell>
                  
                    <TableCell align="center">{row.quantity}</TableCell>
                    <TableCell align="center">{row.food_name}</TableCell>
                    <TableCell align="center">{row.calories}</TableCell>
                    <TableCell align="center"> { row.delivery ? <Button>Check Status</Button> : <Button variant="outlined" onClick={handleReserveClick(row)}>Reserve</Button>}</TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </div>
  );
}

export default Checkout;

