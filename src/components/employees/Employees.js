import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box } from "@mui/system";

const headStyle = { fontWeight: "bold" };

const Employees = () => {
  return (
    <Box sx={{ m: 2 }}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={headStyle}>Name</TableCell>
              <TableCell sx={headStyle}>Email</TableCell>
              <TableCell sx={headStyle}>Role</TableCell>
              <TableCell sx={headStyle}>Active Status</TableCell>
              <TableCell sx={headStyle}>Designation</TableCell>
              <TableCell sx={headStyle}>Date of Birth</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* {rows.map((row) => ( */}
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>Ratheesh Pr</TableCell>
              <TableCell>ratheeshprajan1995@gmail.com</TableCell>
              <TableCell>associate</TableCell>
              <TableCell>Active </TableCell>
              <TableCell>SE</TableCell>
              <TableCell>13/06/1995</TableCell>
            </TableRow>
            {/* ))} */}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Employees;
