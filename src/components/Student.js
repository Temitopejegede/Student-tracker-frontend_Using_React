import * as React from "react";
import Box from "@mui/material/Box";
// import { makeStyles } from "@mui/styles";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     "&>*": {
//       margin: theme.spacing(1),
//     },
//   },
// }));

export default function Student() {
  const paperStyle = { padding: "50px 20px", width: 600, margin: "20px auto" };
  //   const classes = useStyles();

  return (
    <Container>
      <Paper elevation={3} style={paperStyle}>
        <h1 style={{ color: "green" }}>Add a student</h1>
        <form noValidate autocomplete="off">
          <TextField
            id="standard-basic"
            label="Student Name"
            variant="outlined"
            fullWidth
          />

          <TextField
            style={{ marginTop: "10px" }}
            id="standard-basic"
            label="Student Address"
            variant="outlined"
            fullWidth
          />
        </form>
      </Paper>
    </Container>
  );
}
