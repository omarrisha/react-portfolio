import "./App.css";
import { Home, About, Portfolio, Contact } from "./components";

function App() {
  return (
    <>
      <main className="main">
        <Home />
        <About />
        <Portfolio />
        <Contact />
      </main>
    </>
  );
}

export default App;
