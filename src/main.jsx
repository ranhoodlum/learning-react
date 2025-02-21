import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Greetings from "./Greetings.jsx";
import { FavFood } from "./FavFood.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <Greetings />
    <FavFood />
  </StrictMode>,
);
