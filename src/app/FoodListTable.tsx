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
import axios from "axios";

type MockData = {
  distribution_date: string;
  food_type: string;
  quantity: string;
  food_name: string;
  calories: string;
  reserved: boolean;
  delivery: boolean;
};

const mockData = [
  {
    distribution_date: "2/20/25",
    quantity: "2 cans",
    food_name: "Green Beans",
    calories: "34",
    reserved: false,
    delivery: false,
  },
  {
    distribution_date: "2/21/25",
    quantity: "1 can",
    food_name: "Peaches",
    calories: "50",
    reserved: false,
    delivery: false,
  },
  {
    distribution_date: "2/22/25",
    quantity: "3 boxes",
    food_name: "Oatmeal",
    calories: "150",
    reserved: false,
    delivery: false,
  },
  {
    distribution_date: "2/23/25",
    quantity: "1 case",
    food_name: "Spaghetti",
    calories: "200",
    reserved: false,
    delivery: false,
  },
  {
    distribution_date: "2/24/25",
    quantity: "4 cans",
    food_name: "Chicken Breast",
    calories: "210",
    reserved: false,
    delivery: false,
  },
  {
    distribution_date: "2/25/25",
    quantity: "2 cans",
    food_name: "Corn",
    calories: "120",
    reserved: false,
    delivery: false,
  },
  {
    distribution_date: "2/26/25",
    quantity: "3 cans",
    food_name: "Pineapple",
    calories: "90",
    reserved: false,
    delivery: false,
  },
  {
    distribution_date: "2/27/25",
    quantity: "2 boxes",
    food_name: "Corn Flakes",
    calories: "100",
    reserved: false,
    delivery: false,
  },
  {
    distribution_date: "2/28/25",
    quantity: "1 bag",
    food_name: "Brown Rice",
    calories: "215",
    reserved: false,
    delivery: false,
  },
  {
    distribution_date: "3/1/25",
    quantity: "5 cans",
    food_name: "Salmon",
    calories: "250",
    reserved: false,
    delivery: false,
  },
];

function getRandomItems(array, numItems) {
  const shuffled = [...array].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, numItems);
}

interface FoodListTableProps {
  selectedPantryName: string | null;
}

const FoodListTable: React.FC<FoodListTableProps> = ({
  selectedPantryName,
}) => {
  const [filterQuery, setFilterQuery] = useState("");
  const [filteredRows, setFilteredRows] = useState<MockData[]>([]);
  const [column, setColumn] = useState("distribution_date");
  const [aiTableClicked, setAiTableClicked] = useState(false);
  const [aiChef, setAiChef] = useState([{}]);
  const [reservedItems, setReservedItems] = useState([]);

  const handleReserveClick = (item) => {
    console.log("user clicked: ", item);
    if (!item.reserved) {
      setReservedItems((prev) => [...prev, item]);

      item.reserved = true;
      console.log("reserved items: ", reservedItems);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("dataArray", JSON.stringify(reservedItems));
      localStorage.setItem("pantryname", JSON.stringify(selectedPantryName));
    }

    return () => {
      // cleanup, for localStorage
      localStorage.removeItem("dataArray");
      localStorage.removeItem("pantryname");
    };
  }, [reservedItems, selectedPantryName]);

  const generateText = () => {
    console.log("inseide generate text ");
    // const mainInputElement = document.getElementById('main-input-element');
    // const inputText = mainInputElement ? mainInputElement.value : '';
    const foodNames = filteredRows.map((ele) => ele.food_name);
    if (!filteredRows) {
      alert("Food cannot be empty for an AI response.");
    } else {
      axios
        .post(
          "https://api.openai.com/v1/chat/completions",
          {
            model: "gpt-3.5-turbo",

            messages: [
              {
                role: "user",

                content: `Return to me multiple popular western meals you can make with these ingredients: ${foodNames}: return in an array of objects like this: [{"food": "place meal here"},]`,
              },
            ],
            max_tokens: 1000,
          },
          {
            headers: {
              Authorization: `Bearer ${process.env.NEXT_PUBLIC_openAIKey}`,
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => {
          const gptResponse = response.data.choices[0].message.content;
          console.log("ai chef recomends: ", gptResponse);
          setAiChef(JSON.parse(gptResponse));
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  };

  const handleAIchefClick = () => {
    setAiTableClicked(!aiTableClicked);
    if (!aiTableClicked) {
      generateText();
    }
  };

  useEffect(() => {
    if (selectedPantryName) {
      console.log("setting");
      setFilteredRows(getRandomItems(mockData, 8));
    }
  }, [selectedPantryName]);

  const handleFilterChange = (event) => {
    const query = event.target.value;
    setFilterQuery(query);

    const filteredData = mockData.filter((row) =>
      row[column].toLowerCase().startsWith(query.toLowerCase())
    );
    setFilteredRows(getRandomItems(filteredData, 8));
  };

  return (
    <Container sx={{}}>
      <Typography
        variant="h4"
        sx={{ marginBottom: 5, color: "#008CBA", fontWeight: "bold", fontFamily:"Arial" }}
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
        <Table sx={{ minWidth: 650, fontFamily:"Arial" }} aria-label="simple table" >
          <TableHead>
            <TableRow>
              <TableCell style={{ fontWeight: "bold", fontFamily:"Arial"  }} align="center">
                Distribution Date
              </TableCell>
              {/* <TableCell style={{ fontWeight: "bold" }} align="center">
                Food Type
              </TableCell> */}
              <TableCell style={{ fontWeight: "bold", fontFamily:"Arial"  }} align="center">
                Quantity [per person]
              </TableCell>
              <TableCell style={{ fontWeight: "bold", fontFamily:"Arial"  }} align="center">
                Food
              </TableCell>
              <TableCell style={{ fontWeight: "bold", fontFamily:"Arial"  }} align="center">
                Calories [per unit]
              </TableCell>
              <TableCell style={{ fontWeight: "bold",fontFamily:"Arial"  }} align="center">
                Reserve
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
                {/* <TableCell align="center">{row.food_type}</TableCell> */}
                <TableCell align="center">{row.quantity}</TableCell>
                <TableCell align="center">{row.food_name}</TableCell>
                <TableCell align="center">{row.calories}</TableCell>
                <TableCell align="center">
                  {" "}
                  <Button
                    onClick={() => handleReserveClick(row)}
                    disabled={row.reserved}
                    variant="text"
                  >
                    Add Item
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Button
        onClick={handleAIchefClick}
        sx={{ margin: "50px" }}
        variant="outlined"
      >
        Explore AI chef meals
      </Button>
      <Button variant="outlined" href="/checkout">
        Checkout
      </Button>
  
      {aiTableClicked ? (
        <TableContainer component={Paper}>
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
        </TableContainer>
      ) : (
        ""
      )}
    </Container>
  );
};

export default FoodListTable;
