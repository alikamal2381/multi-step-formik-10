import React from "react";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export const Names = ({ formData, setForm, navigation }) => {
  const { firstName, lastName, nickName } = formData;
  console.log(firstName);

  return (
    <Container maxWidth="xs">
      <h3>First Name: </h3>
      <TextField
        label="First Name"
        name="firstName"
        value={firstName}
        onChange={setForm}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
      />

      <h3>Last Name: </h3>
      <TextField
        label="Last Name"
        name="lastName"
        value={lastName}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
      />

      <h3>Nick Name: </h3>
      <TextField
        label="Nick Name"
        name="nickName"
        value={nickName}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
      />
      <Button
        variant="contained"
        fullWidth
        color="primary"
        style={{ marginTop: "1rem" }}
        onClick={() => navigation.next()}
      >
        Next
      </Button>
    </Container>
  );
};
