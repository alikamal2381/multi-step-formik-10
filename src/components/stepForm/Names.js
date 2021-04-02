import React from "react";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";

export const Names = ({ formData, setForm, navigation }) => {
  const { firstName, lastName, nickName } = formData;

  return (
    <Container>
      <h3>First Name: </h3>
      <TextField label="First Name" name="firstName" value={firstName} />

      <h3>Last Name: </h3>
      <TextField label="Last Name" name="lastName" value={lastName} />

      <h3>Nick Name: </h3>
      <TextField label="Nick Name" name="nickName" value={nickName} />
    </Container>
  );
};
