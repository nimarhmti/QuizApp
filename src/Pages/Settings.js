import { Box, Button, CircularProgress, Typography } from "@mui/material";

import React from "react";
import SelectField from "../Components/SelectField";
import TextfieldComp from "../Components/TextfieldComp";
import useAxios from "../Hooks/useAxios";
import { useHistory } from "react-router-dom";
function Settings() {
  const history = useHistory();
  const { response, isloading, error } = useAxios({ url: "/api_category.php" });
  if (isloading) {
    return (
      <Box mt={20}>
        <CircularProgress />
      </Box>
    );
  }
  if (error) {
    console.log("flag");
    return (
      <Typography variant="h6" mt={20} color="red">
        Something went wrong...
      </Typography>
    );
  }

  const difficultyOptions = [
    { id: "easy", name: "Easy" },
    { id: "meduim", name: "Medium" },
    { id: "hard", name: "Hard" },
  ];

  const typeOptions = [
    { id: "multiple", name: "Multiple Choice" },
    { id: "boolean", name: "True/False" },
  ];

  const onSubmitHandler = (event) => {
    event.preventDefault();
    history.push("/questions");
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <SelectField option={response.trivia_categories} label="Category" />
      <SelectField option={difficultyOptions} label="Difficulty" />
      <SelectField option={typeOptions} label="Type" />
      <TextfieldComp />
      <Box mt={3} width="100%">
        <Button variant="contained" fullWidth type="submit">
          Get Start
        </Button>
      </Box>
    </form>
  );
}

export default Settings;
