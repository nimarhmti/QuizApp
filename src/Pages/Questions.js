import { Box, Button, CircularProgress, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { decode } from "html-entities";
import React, { useState, useEffect } from "react";
import useAxios from "../Hooks/useAxios";
import { useHistory } from "react-router-dom";
import { changeScoreHandler } from "../Store/action";

const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
};
function Questions() {
  const history = useHistory();
  const dispatch = useDispatch();
  const {
    questionCategory,
    questionDifficulty,
    questionType,
    amountOfQuestion,
    score,
  } = useSelector((state) => state);
  let apiUrl = `/api.php?amount=${amountOfQuestion}&category=${questionCategory}&type=${questionType}`;
  const [questionIndex, setQuestionIndex] = useState(0);
  const [option, setOption] = useState([]);
  const { response, isloading, error } = useAxios({ url: apiUrl });
  console.log(response);
  useEffect(() => {
    if (response) {
      const question = response.results[questionIndex];
      let asnswers = [...question.incorrect_answers];
      asnswers.splice(
        getRandomInt(question.incorrect_answers.length),
        0,
        question.correct_answer
      );
      setOption(asnswers);
    }
  }, [response, questionIndex]);

  if (isloading) {
    return (
      <Box>
        <CircularProgress mt={20} />
      </Box>
    );
  }

  const asnwerHandler = (event) => {
    const question = response.results[questionIndex];

    if (event.target.textContent === question.correct_answer) {
      dispatch(changeScoreHandler(score + 1));
    }
    if (questionIndex + 1 < response.results.length) {
      setQuestionIndex((preState) => (preState += 1));
    } else {
      history.push("/score");
    }
  };

  return (
    <Box>
      <Typography variant="h4">Question {questionIndex + 1}</Typography>
      <Typography mt={5}>
        {decode(response.results[questionIndex].question)}
      </Typography>
      {option.map((item, index) => (
        <Box mt={2} key={index}>
          <Button onClick={asnwerHandler} variant="contained">
            {decode(item)}
          </Button>
        </Box>
      ))}
      <Box mt={2}>
        Score: {score}/{response.results.length}
      </Box>
    </Box>
  );
}

export default Questions;
