import { useState, useEffect } from "react";
import "./App.css";
import { fetchApi } from "./apiService";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  );
}

export default App;
