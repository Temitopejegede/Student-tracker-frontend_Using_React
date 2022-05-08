import * as React from "react";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     "&>*": {
//       margin: theme.spacing(1),
//     },
//   },
// }));

export default function Student() {
  const paperStyle = { padding: "50px 20px", width: 600, margin: "20px auto" };
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const handleClick = (e) => {
    e.preventDefault();
    const student = { name, address, setAddress };
    console.log(student);
  };

  return (
    <Container>
      <Paper elevation={3} style={paperStyle}>
        <h1 style={{ color: "blue" }}>Add a student</h1>
        <form noValidate autocomplete="off">
          <TextField
            id="standard-basic"
            label="Student Name"
            variant="outlined"
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <TextField
            style={{ marginTop: "10px" }}
            id="standard-basic"
            label="Student Address"
            variant="outlined"
            fullWidth
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <Button
            style={{ marginTop: "15px" }}
            variant="contained"
            onClick={handleClick}
          >
            Submit
          </Button>
        </form>
      </Paper>
    </Container>
  );
}
