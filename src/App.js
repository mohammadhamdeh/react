import ButtonAppBar from "./components/ButtonAppBar";
import MediaCard from "./components/Card";
import { Button, Box } from "@mui/material";

function App() {
  return (
    <>
      <ButtonAppBar />

      <Box sx={{ p: 4 }}>
        <Button variant="contained">
          Test Button
        </Button>

        <MediaCard />
      </Box>
    </>
  );
}

export default App;
