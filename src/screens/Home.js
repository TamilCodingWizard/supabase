import React, { useState } from "react";
import { Grid, Typography } from "@mui/material";
import StudentCard from "../components/Studentcard";

const Home = () => {
  const [students, setStudents] = useState([
    {
      id: 1,
      name: "John",
      comments: "A Brilliant Student",
      cgpa: 4,
    },
    {
      id: 2,
      name: "Phil",
      comments: "An outstanding Student",
      cgpa: 3,
    },
    {
      id: 3,
      name: "Mia",
      comments: "An outstanding Student",
      cgpa: 2,
    },
    {
      id: 4,
      name: "Abdul",
      comments: "An outstanding Student",
      cgpa: 5,
    },
  ]);
  return (
    <Grid container spacing={5}>
      {students &&
        students.map((student) => {
          return <Grid item lg={4} xl={4} key={student.id}>
            <StudentCard student={student}/>
        </Grid>
        })}
    </Grid>
  );
};

export default Home;
