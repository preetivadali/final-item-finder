import { BrowserRouter } from "react-router-dom";
import routes from "./routes/routes";

const App = () => {
  return (
    <BrowserRouter>
      { routes }
    </BrowserRouter>
  );
};

export default App;
