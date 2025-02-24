import App from "./App.jsx";
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import "./index.css";
import Person from "./Person.jsx";
import Accordion from "./Accordion.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <Person />
    <Accordion />
  </StrictMode>,
);
