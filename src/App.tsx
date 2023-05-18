import { MantineProvider } from "@mantine/core";
import AppRoutes from "App.routes";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <MantineProvider withNormalizeCSS>
        <AppRoutes/>
      </MantineProvider>
    </Router>
  );
}

export default App;
