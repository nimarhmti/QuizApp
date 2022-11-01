import { Box, Button, Typography } from "@mui/material";
import React from "react";
import useAxios from "../Hooks/useAxios";
function Questions() {
  let apiUrl = `/api.php?amount=15`;
  const { response, isloading, error } = useAxios({ url: apiUrl });
  console.log(response);
  return (
    <Box>
      <Typography variant="h4">question 01</Typography>
      <Typography mt={5}>this is question?</Typography>
      <Box mt={2}>
        <Button variant="contained">answer01</Button>
      </Box>
      <Box mt={2}>
        <Button variant="contained">answer02</Button>
      </Box>
      <Box mt={2}>Score: 2/6</Box>
    </Box>
  );
}

export default Questions;
