import React ,{useState}   from "react";
import ReactDOM from "react-dom";
import "./styles.css";

function Calculator(){
    const [data, setData] = useState("");
    const calcBtns = [];
    [9, 8, 7, 6, 5, 4, 3, 2, 1, 0, ".", "%"].forEach((item) => {
        calcBtns.push(
          <button
            onClick={(e) => { setData(data + e.target.value); }} value={item} key={item}>
            {" "}
            {item}
          </button>
           )
        })
    return (
    <div className="outline"> {" "}
        <div className="input">
          {data}
        </div>  
        <div className="digits">
          {calcBtns}
        </div>
        {/* First Grid */}
      <div className="grid">
        <button onClick={()=> setData(data.substr(0,data.length - 1))}>
          Clear
        </button>
        <button onClick={()=> setData("")}>
          AC
        </button>
      </div>
        {/* Second Grid */}
      <div className="subgrid">
        <button onClick={e=> setData(data + e.target.value)} value="+">
          +
        </button>
        <button onClick={e=> setData(data + e.target.value)} value="-">
          -
        </button>
        <button onClick={e=> setData(data + e.target.value)} value="*">
          *
        </button>
        <button onClick={e=> setData(data + e.target.value)} value="/">
          /
        </button>
        {/* Final Score button */}
        <button
          onClick={(e) => {
            try {
              setData(
                String(eval(data)).length > 3 &&
                String(eval(data)).includes(".")
                ? String(eval(data).toFixed(4))
                : String(eval(data))
              );
            } catch (err) {
              console.log(err);
            }
          }}
          value="=">
          =
        </button>
      </div>
  </div>  
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Calculator />, rootElement);