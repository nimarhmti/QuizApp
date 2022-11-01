import { Switch, Route } from "react-router-dom";
import Settings from "./Pages/Settings";
import FinalScreen from "./Pages/FinalScreen";
import Questions from "./Pages/Questions";
import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
function App() {
  return (
    <div className="App">
      <Container maxWidth="sm">
        <Box textAlign="center" mt={5}>
          <Switch>
            <Route path="/" exact>
              <Typography variant="h2" fontWeight="bold">
                Quiz App
              </Typography>
              <Settings />
            </Route>
            <Route path="/questions">
              <Questions />
            </Route>
            <Route path="/score">
              <FinalScreen />
            </Route>
          </Switch>
        </Box>
      </Container>
    </div>
  );
}

export default App;
