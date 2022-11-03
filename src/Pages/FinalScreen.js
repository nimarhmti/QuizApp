import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { changeAmountHandler, changeScoreHandler } from "../Store/action";
function FinalScreen() {
  const dispatch = useDispatch();
  const { score, amountOfQuestion } = useSelector((state) => state);
  const history = useHistory();
  const onclickHandler = () => {
    dispatch(changeAmountHandler(5));
    dispatch(changeScoreHandler(0));
    history.push("/");
  };
  return (
    <Box mt={30}>
      <Typography mb={3} variant="h6" fontWeight="bold">
        Final Score : {(score / amountOfQuestion).toFixed(2) * 100} %
      </Typography>
      <Typography mb={3} variant="h6" fontWeight="bold">
        correct answer: {score}
      </Typography>
      <Typography mb={3} variant="h6" fontWeight="bold">
        incorrect answer: {Math.abs(amountOfQuestion - score)}
      </Typography>

      <Button onClick={onclickHandler} variant="contained">
        try agian
      </Button>
    </Box>
  );
}

export default FinalScreen;
