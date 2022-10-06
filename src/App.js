import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [state, setState] = useState([]);
  const [mergedata, setMerge] = useState();
  const [page, setPage] = useState(1);

  const arr = [
    { name: "raj nath singh" },
    { name: "raj nath tomar" },
    { name: "raj nath yadav" },
    { name: "raj nath krishna" },
    { name: "raj nath uttar" },
    { name: "raj nath uttar" },
  ];
  useEffect(() => {
    fetch(`https://picsum.photos/v2/list?page=${page}&limit=6`)
      .then((result) => result.json())
      .then((responce) => {
        setState(responce);
      })
      .catch(() => console.log("error is found"));

    var data = state.map((item, i) => {
      return { ...item, ...arr[i] };
    });
    setMerge(data);
  }, [state]);

  return (
    <div className="App">
      <h1>Hello World</h1>
      <div id="box">
        {mergedata?.map((item, index) => {
          return (
            <div class="box">
              <div class="box-img">
                <img
                  src={item.download_url}
                  alt="image"
                  width={400}
                  height={400}
                />
              </div>
              <div class="box-content">
                <h3>Kristina</h3>
                <p>{item.name}</p>
              </div>
            </div>
          );
        })}
      </div>
      <button
        onClick={() => setPage((x) => x + 1)}
        style={{ marginBottom: "20px" }}
      >
        Next six
      </button>
    </div>
  );
}

export default App;

{
  /* <div
              style={{
                width: "400px",
                height: "400px",
                marginBottom: "60px",
              }}
              key={index}
            >
              <img
                src={item.download_url}
                alt="image"
                width={400}
                height={400}
              />
              <p>{item.name}</p>
            </div> */
}
