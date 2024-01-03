import React from "react";
import ReactDOM from "react-dom/client";
import Editor from "./Editor";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Editor />
  </React.StrictMode>
);
