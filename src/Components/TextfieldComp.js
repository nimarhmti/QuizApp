import { FormControl, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useDispatch } from "react-redux";
import { changeAmountHandler } from "../Store/action";
function TextfieldComp() {
  const dispatch = useDispatch();
  const onChangeHandler = (e) => {
    dispatch(changeAmountHandler(e.target.value));
  };
  return (
    <Box mt={3} width="100%">
      <FormControl fullWidth size="small">
        <TextField
          variant="outlined"
          label="amount of question"
          onChange={onChangeHandler}
          type="number"
          size="small"
        />
      </FormControl>
    </Box>
  );
}

export default TextfieldComp;
