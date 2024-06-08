import Canvas from "./canvas";
import Customizer from "./pages/Customizer1";
import Home from "./pages/Home";

function App() {
  return (
    <main className="app transition-all">
      <Home></Home>
      <Canvas></Canvas>
      <Customizer></Customizer>
    </main>
  );
}

export default App;
