import { Box, Button, FormControl, Rating, TextField } from "@mui/material";
import React, { useState } from "react";
import { styled } from "@mui/material";

const StyledBox = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  margin: 10,
  flexDirection: "column",
});

const StyledFormControl = styled(FormControl)({
  backgroundColor: "#2d2d2d",
  margin: "20px 10px",
  borderRadius: 5,
  minWidth: 500,
  maxWidth: 900,
});

const StyledTextfield = styled(TextField)({
  margin: "20px 20px",
});

const StyledButton = styled(Button)({
    margin:'20px 40%',
    background:'#3cb371'
})

const Create = () => {
  const [name, setName] = useState("");
  const [comments, setComments] = useState("");
  const [cgpa, setCgpa] = useState(2);
  const [formError, setFormError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log({name,comments,cgpa})
  }

  return (
    <StyledBox component="form">
      <StyledFormControl>
        <StyledTextfield
          color="secondary"
          id="name"
          label="Name"
          value={name}
          InputLabelProps={{
            sx: {
              color: "#a0a0a0",
            },
          }}
          onChange={(e) => setName(e.target.value)}
        />
        <StyledTextfield
          color="secondary"
          id="comments"
          label="Comments"
          value={comments}
          multiline={true}
          rows={3}
          InputLabelProps={{
            sx: {
              color: "#a0a0a0",
            },
          }}
          onChange={(e) => setComments(e.target.value)}
        />
        <Rating
          name="simple-controlled"
          value={cgpa}
          onChange={(e) => {
            setCgpa(parseInt(e.target.value))
          }}
          sx={{color:'#3cb371', margin:'10px 30px'}}
        />
        <StyledButton variant="contained" onClick={handleSubmit}>Submit</StyledButton>
      </StyledFormControl>
    </StyledBox>
  );
};

export default Create;
