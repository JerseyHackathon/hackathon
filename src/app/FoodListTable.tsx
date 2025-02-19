"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, Container, TextField, Typography } from "@mui/material";
import MenuDropDown from "./MenuDropDown";
import axios from 'axios'


const mockData = [
  { distribution_date: "2/20/25", food_type: "CANNED VEGETABLES", quantity: "2", food_name: "Green Beans", calories: "34" },
  { distribution_date: "2/21/25", food_type: "CANNED FRUITS", quantity: "1", food_name: "Peaches", calories: "50" },
  { distribution_date: "2/22/25", food_type: "HOT AND COLD CEREALS", quantity: "3", food_name: "Oatmeal", calories: "150" },
  { distribution_date: "2/23/25", food_type: "RICE/PASTA", quantity: "1", food_name: "Spaghetti", calories: "200" },
  { distribution_date: "2/24/25", food_type: "CANNED MEATS", quantity: "4", food_name: "Chicken Breast", calories: "210" },
  { distribution_date: "2/25/25", food_type: "CANNED VEGETABLES", quantity: "2", food_name: "Corn", calories: "120" },
  { distribution_date: "2/26/25", food_type: "CANNED FRUITS", quantity: "3", food_name: "Pineapple", calories: "90" },
  { distribution_date: "2/27/25", food_type: "HOT AND COLD CEREALS", quantity: "2", food_name: "Corn Flakes", calories: "100" },
  { distribution_date: "2/28/25", food_type: "RICE/PASTA", quantity: "1", food_name: "Brown Rice", calories: "215" },
  { distribution_date: "3/1/25", food_type: "CANNED MEATS", quantity: "5", food_name: "Salmon", calories: "250" }
];

function getRandomItems(array, numItems) {
  const shuffled = [...array].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, numItems);
}

interface FoodListTableProps {
  selectedPantryName: string | null;
}

const FoodListTable: React.FC<FoodListTableProps> = ({ selectedPantryName }) => {
  const [filterQuery, setFilterQuery] = useState("");
  const [filteredRows, setFilteredRows] = useState(getRandomItems(mockData, 5));
  const [column, setColumn] = useState("distribution_date");
  const [aiTableClicked, setAiTableClicked] = useState(false)
  const [aiChef, setAiChef] = useState([{}])

  const generateText = () => {
    console.log("inseide generate text ")
    // const mainInputElement = document.getElementById('main-input-element');
    // const inputText = mainInputElement ? mainInputElement.value : '';
    const foodNames = filteredRows.map(ele=>ele.food_name)
    if(!filteredRows){
      alert("Food cannot be empty for an AI response.")
    } else{
    axios.post('https://api.openai.com/v1/chat/completions',
        {
            "model": "gpt-3.5-turbo",

           "messages": [
              {
                "role": "user",

                "content": `Return to me multiple popular western meals you can make with these ingredients: ${foodNames}: return in an array of objects like this: [{"food": "place meal here"},]`
              }
            ],
              "max_tokens": 1000
          }, {
      headers: {
        'Authorization': `Bearer ${process.env.NEXT_PUBLIC_openAIKey}`,
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      const gptResponse = response.data.choices[0].message.content
      console.log("ai chef recomends: ", gptResponse)
      setAiChef(JSON.parse(gptResponse))
    })
    .catch(error => {
      console.error('Error:', error);
    });
  }
  };

  const handleAIchefClick = () => {
    setAiTableClicked(!aiTableClicked)
    if(!aiTableClicked){
      generateText()
    }
    
  }
  useEffect(() => {
    if (selectedPantryName) {
      setFilteredRows(getRandomItems(mockData, 5));
    }
  }, [selectedPantryName]);

  const handleFilterChange = (event) => {
    const query = event.target.value;
    setFilterQuery(query);

    const filteredData = mockData.filter((row) =>
      row[column].toLowerCase().startsWith(query.toLowerCase())
    );
    setFilteredRows(getRandomItems(filteredData, 5));
  };

  return (
    <Container sx={{}}>
      <Typography
        variant="h4"
        sx={{ marginBottom: 5, color: "#008CBA", fontWeight: "bold" }}
      >
        Food Available for Pickup
      </Typography>

      {selectedPantryName && (
        <Typography variant="h5" sx={{ marginBottom: 2, color: "#333" }}>
          Selected Pantry: {selectedPantryName}
        </Typography>
      )}

      <MenuDropDown
        option1="distribution_date"
        option2="food_type"
        option3="food_name"
        setColumn={setColumn}
      />

      <TextField
        size="small"
        label={`Enter ${column}`}
        variant="outlined"
        value={filterQuery}
        onChange={handleFilterChange}
        style={{ marginBottom: "20px" }}
      />
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
            {filteredRows.map((row, count) => (
              <TableRow
                key={count}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center">{row.distribution_date}</TableCell>
                <TableCell align="center">{row.food_type}</TableCell>
                <TableCell align="center">{row.quantity}</TableCell>
                <TableCell align="center">{row.food_name}</TableCell>
                <TableCell align="center">{row.calories}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Button onClick={handleAIchefClick} sx={{margin: "50px"}} variant="outlined">Explore AI chef meals</Button>



     { aiTableClicked ?  <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell style={{ fontWeight: "bold" }} align="center">
                Meals
              </TableCell>
       
            </TableRow>
          </TableHead>
          <TableBody>
            {aiChef.map((row, count) => (
              <TableRow
                key={count}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center">{row.food}</TableCell>
         
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer> : ""
}
    </Container>
  );
};

export default FoodListTable;


