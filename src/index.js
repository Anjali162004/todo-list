import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom"; 
//Styles
import "../src/assets/index.css";
import App from "./App";
//Redux
import store from "./redux/store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router basename={process.env.REACT_APP_URI}>
      <Provider store={store}> 
        <App/>
      </Provider>
    </Router>
  </React.StrictMode>
);

 