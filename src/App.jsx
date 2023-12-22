import "./App.css";
import { useState } from "react";

function App() {
  const arr = ["Positive", "Negative", "Normal"];
  const [index, setIndex] = useState();
  const handleClickPositive = (id) => {
    setIndex(id - 1);
  };
  // useEffect(() => {
    if (index >= 3) {
      alert("Error");
    }
  // }, [index]);
  return (
    <>
      <div className="App">
        <div className="container">
          <div className="change">
            <input
              type="number"
              placeholder="Enter tab index"
              onChange={(e) => {
                setIndex(e.target.value - 1);
              }}
            />
            <button className="tab-change">Change Tab</button>
          </div>
          <div className="buttons">
            <button className="positive" onClick={() => handleClickPositive(1)}>
              {arr[0]}
            </button>
            <button className="negative" onClick={() => handleClickPositive(2)}>
              {arr[1]}
            </button>
            <button className="normal" onClick={() => handleClickPositive(3)}>
              {arr[2]}
            </button>
          </div>
          <h1>{arr[index]} content</h1>
        </div>
      </div>
    </>
  );
}
export default App;
