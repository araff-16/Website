import "./App.css";
import Welcome from "./components/Welcome";
import About from "./components/About";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Welcome />
      <About />
    </div>
  );
}

export default App;
