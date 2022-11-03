import {
  CHANGE_CATEGORY,
  CHANGE_DIFFICULTY,
  CHANGE_TYPE,
  CHANGE_AMOUNT,
  CHANGE_SCORE,
} from "./actionTypes";
//initial value
const initialState = {
  questionCategory: "",
  questionDifficulty: "",
  questionType: "",
  amountOfQuestion: 5,
  score: 0,
};
const reduce = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_CATEGORY:
      return {
        ...state,
        questionCategory: action.payload,
      };
    case CHANGE_DIFFICULTY:
      return {
        ...state,
        questionDifficulty: action.payload,
      };
    case CHANGE_TYPE:
      return {
        ...state,
        questionType: action.payload,
      };
    case CHANGE_AMOUNT:
      return {
        ...state,
        amountOfQuestion: action.payload,
      };
    case CHANGE_SCORE:
      return {
        ...state,
        score: action.payload,
      };
    default:
      return state;
  }
};
export default reduce;
