import React, { createElement as e, useState} from "react";
import "./index.css";

function App() {

  const [count, setCount] = useState(0)

  return e("div", { clasName: "container" }, [
    e("h1", { className: "font-bold", key: 1 }, `testJSX ${count}`),
    e(
      "button",
      {
        className: "py-2 px-4 border",
        key: 2,
        onClick: () => setCount(count+1),
      },
      "clickMe"
    ),
  ]);
}

// export default App;
