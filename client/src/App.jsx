import Canvas from "./canvas";
import Customizer from "./pages/Customizer1";
import Home from "./pages/Home";

import { Toaster } from "react-hot-toast";

function App() {
  return (
    <main className="app transition-all">
      <Home></Home>
      <Canvas></Canvas>
      <Customizer></Customizer>
      <Toaster />
    </main>
  );
}

export default App;
