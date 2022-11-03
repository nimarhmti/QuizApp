import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  changeCategoryHandler,
  changeDifficultyHandler,
  changeTypeHandler,
} from "../Store/action";
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
  const dispatch = useDispatch();

  //handler functions
  const onChangeHandler = (e) => {
    const event = e.target.value;
    setValue(event);
    switch (label) {
      case "Category":
        dispatch(changeCategoryHandler(event));
        break;
      case "Difficulty":
        dispatch(changeDifficultyHandler(event));
        break;
      case "Type":
        dispatch(changeTypeHandler(event));
        break;
      default:
        return;
    }
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
