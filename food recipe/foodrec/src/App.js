import Pages from "./pages/Pages";
import Catagories from "./componets/Catagories";
import { BrowserRouter } from "react-router-dom";
import Search from "./componets/Search";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Search/>
      <Catagories />
      <Pages />
      </BrowserRouter>
    </div>
  );
}

export default App;
