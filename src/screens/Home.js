import React, { useEffect, useState } from "react";
import { Grid, Typography } from "@mui/material";
import StudentCard from "../components/Studentcard";
import supabase from './../config/supabase';

const Home = () => {
  const [students, setStudents] = useState(null);
  const [fetchError,setFetchError] = useState(null)

  const deleteStudent = (id) => {
    setStudents((prevStudents) => {
      return prevStudents.filter((student) => student.id !== id);
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from("Students").select();

      if (error) {
        setFetchError('Something went wrong')
        setStudents(null)
        console.log(error)
      }

      if (data) {
        setStudents(data)
        setFetchError(null)
        console.log(data)
      }

    };

    fetchData();
  }, []);

  return (
    <Grid container spacing={5}>
      {students &&
        students.map((student) => {
          return (
            <Grid item lg={4} xl={4} key={student.id}>
              <StudentCard student={student} deleteStudent={deleteStudent} />
            </Grid>
          );
        })}
    </Grid>
  );
};

export default Home;
