import {
  Card,
  CardContent,
  Rating,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import React from "react";

const StyledCard = styled(Card)({
  minWidth: 150,
  background: "#2d2d2d",
  borderRadius: 5,
  "&:hover": {
    boxShadow:'0px 1px 5px 0px #6dcc93',
    elevation:20
  }
});

const StudentCard = ({student}) => {
  return (
    <StyledCard raised={true} elevation={1}>
      <CardContent>
        <Stack spacing={2}>
          <Typography variant="h5" component="div" color='#3cb371'>
            {student.name}
          </Typography>
          <Typography variant="body2">{student.comments}</Typography>
          <Rating name="read-only" value={student.cgpa.toString()} readOnly sx={{color:'#3cb371'}} />
        </Stack>
      </CardContent>
    </StyledCard>
  );
};

export default StudentCard;
