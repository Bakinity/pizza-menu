import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return <h1>Hello React</h1>;
}

function Pizza() {}

//React 18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

//React 17
// ReactDOM.render(<App />);
