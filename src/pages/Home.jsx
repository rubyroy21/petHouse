import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Paper from "@mui/material/Paper";
import { useSelector, useDispatch } from "react-redux";
import { loadPets } from "../redux/actions";
import { Navbar } from "./Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export const Home = () => {
  let dispatch = useDispatch();

  const navigate = useNavigate();

  const [data, setData] = useState([]);

  const [sortValue, setSortValue] = useState("");

  const sortOptions = ["cost_per_day", "rating"];

  useEffect(() => {
    dispatch(loadPets());
  }, []);

  useEffect(() => {
    loadPetData();
  }, []);

  const loadPetData = async () => {
    return await axios
      .get("http://localhost:5000/pet_spec")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  };

  const handleSortAsc = async (e) => {
    let value = e.target.value;
    setSortValue(value);
    return await axios
      .get(`http://localhost:5000/pet_spec?_sort=${value}&_order=asc`)
      .then((res) => {
        console.log(res);
        setData(res.data);
      })
      .catch((err) => console.log(err));
  };

  const handleSortDesc = async (e) => {
    let value = e.target.value;
    setSortValue(value);
    return await axios
      .get(`http://localhost:5000/pet_spec?_sort=${value}&_order=desc`)
      .then((res) => {
        console.log(res);
        setData(res.data);
      })
      .catch((err) => console.log(err));
  };

  const handleFilter = async (value) => {
    return await axios
      .get(`http://localhost:5000/pet_spec?verified=${value}`)
      .then((res) => {
        console.log(res);
        setData(res.data);
      })
      .catch((err) => console.log(err));
  };

  const handleReset = () => {
    loadPetData();
  };

  return (
    <div>
      <Navbar />

      <h1>Pets Details</h1>
      <Button
        style={{ fload: "right" }}
        variant="contained"
        color="primary"
        onClick={handleReset}
      >
        Reset
      </Button>
      <br />
      <br />
      <TableContainer component={Paper}>
        <Table
          sx={{ minWidth: 500, cursor: "pointer" }}
          aria-label="customized table"
        >
          <TableHead>
            <TableRow>
              <StyledTableCell align="left">id</StyledTableCell>
              <StyledTableCell align="left">Name</StyledTableCell>
              <StyledTableCell align="right">City</StyledTableCell>
              <StyledTableCell align="right">Address</StyledTableCell>
              <StyledTableCell align="right">Capacity</StyledTableCell>
              <StyledTableCell align="right">Cost per day</StyledTableCell>
              <StyledTableCell align="right">Verified</StyledTableCell>
              <StyledTableCell align="right">Rating</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data &&
              data.map((pet) => (
                <StyledTableRow key={pet.id}>
                  <StyledTableCell component="th" scope="row">
                    {pet.id}
                  </StyledTableCell>
                  <StyledTableCell
                    component="th"
                    scope="row"
                    onClick={() => navigate(`/${pet.id}`)}
                  >
                    {pet.name}
                  </StyledTableCell>
                  <StyledTableCell align="right">{pet.city}</StyledTableCell>
                  <StyledTableCell align="right">{pet.address}</StyledTableCell>
                  <StyledTableCell align="right">
                    {pet.capacity}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {pet.cost_per_day}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {pet.verified}
                  </StyledTableCell>
                  <StyledTableCell align="right">{pet.rating}</StyledTableCell>
                </StyledTableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>

      <br />
      <br />

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          height: "50px",
          marginLeft: "5px",
          gap: "5em",
          
        }}
      >
        <h3>Sort by Asc: &nbsp;
        <select style={{border: "none",
          outline: "none"}} onChange={handleSortAsc} value={sortValue}>
          <option style={{border: "none",
          outline: "none"}}>Please Select Value</option>
          {sortOptions.map((item, index) => {
            return (
              <option value={item} key={index}>
                {item}
              </option>
            );
          })}
        </select>
        </h3>
        &nbsp; &nbsp; &nbsp; &nbsp;
        <h3>Sort by Desc: &nbsp;
        <select style={{border: "none",
          outline: "none"}} onChange={handleSortDesc} value={sortValue}>
          <option style={{border: "none",
          outline: "none"}}>Please Select Value</option>
          {sortOptions.map((item, index) => {
            return (
              <option value={item} key={index}>
                {item}
              </option>
            );
          })}
        </select>
        </h3>
        <h3>Filter by Verification: &nbsp;
        <ButtonGroup
          variant="contained"
          aria-label="outlined primary button group"
        >
          <Button
            color="error"
            type="submit"
            onClick={() => handleFilter("Yes")}
          >
            Yes
          </Button>
          <Button color="secondary" onClick={() => handleFilter("No")}>
            No
          </Button>
        </ButtonGroup>
        </h3>
      </div>
    </div>
  );
};
