import "./App.css"
import { Box } from "./components/Box";
import BoxAnimation from "./components/BoxAnimation";
import Drag from "./components/Drag";
const App = () => {
  return (
    <div className="container">
      <div className="motiondiv">
        <Box />
      </div>
      <div className="motiondiv">
        <Drag />
      </div>
      <div className="motiondiv">
        <BoxAnimation />
      </div>
    </div >
  );
}

export default App;