import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// import browersrouter
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* then i normally wrap the Router around the app in the main.jsx (equivalent to the index.js) */}
    <Router>
      <App />
      {/* next check the app jsx */}
    </Router>
  </React.StrictMode>
);
