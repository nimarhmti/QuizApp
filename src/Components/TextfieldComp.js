import { FormControl, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

function TextfieldComp() {
  const onChangeHandler = () => {};
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
