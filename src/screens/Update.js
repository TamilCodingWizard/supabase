import {  Rating, Typography } from "@mui/material";
import React, { useState } from "react";
import { StyledBox, StyledButton, StyledFormControl, StyledTextfield } from './Create';



const Update = () => {
  const [name, setName] = useState("");
  const [comments, setComments] = useState("");
  const [cgpa, setCgpa] = useState(2);
  const [formError, setFormError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name || !comments || cgpa === 0) {
      setFormError('All Field are required')
      return
    } 
    setFormError(null)
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
        {formError && <Typography 
          color='error' sx={{display:'flex',alignItems:'center',justifyContent:'center'}}>{formError}</Typography>}
        <StyledButton variant="contained" onClick={handleSubmit}>Edit</StyledButton>
      </StyledFormControl>
    </StyledBox>
  );
}

export default Update