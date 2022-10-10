import "./App.css";
import Display from "./components/Display";
import Keypad from "./components/Keypad";
import NumberProvider from "./components/NumberProvider";

function App() {
  return (
    <div className="App">
      <NumberProvider>
        <section className="calculator">
          <h1>Calculator</h1>
          <div className="container">
            <Display />
            {/* keypad */}
            <Keypad />
          </div>
          <div className="attribution" style={{ textAlign: "center" }}>
            Challenge by
            <a href="https://twitter.com/AltSchoolAfrica"> AltSchool</a>. Coded
            by
            <a href="https://twitter.com/Chibuike035"> CodexJay</a>.
          </div>
        </section>
      </NumberProvider>
    </div>
  );
}

export default App;
