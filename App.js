import React ,{useState}   from "react";
import ReactDOM from "react-dom";
import "./styles.css";

function App(){
    const [data, setData] = useState("");
    const calcBtns = [];
    [9, 8, 7, 6, 5, 4, 3, 2, 1, 0, ".", "%"].forEach((item) => {
        calcBtns.push(
          <button
            onClick={(e) => { setInput(input + e.target.value); }} value={item} key={item}>
            {" "}
            {item}
          </button>
           );
        });
    return (
        <div className="outline">
        <div className="input">
          {data}
        </div>  
        <div className="digits">
          {calcBtns}
        </div>  
        </div>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);