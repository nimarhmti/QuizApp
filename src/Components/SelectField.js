import { useState } from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  useStepContext,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

function SelectField(props) {
  const { label, option } = props;
  const [value, setValue] = useState("");

  //handler functions
  const onChangeHandler = (e) => {
    setValue(e.target.value);
  };

  return (
    <Box mt={3} maxWidth="100%">
      <FormControl size="small" fullWidth>
        <InputLabel>{label}</InputLabel>
        <Select value={value} label={label} onChange={onChangeHandler}>
          {option.map((item) => (
            <MenuItem value={item.id} key={item.id}>
              {item.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}

export default SelectField;
