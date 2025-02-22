import People from "./People.jsx";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Bio from "./Bio.jsx";
import Avatar from "./Avatar.jsx";
import Animals from "./Animals.jsx";
import PackingList from "./PackingList.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <Bio />
    <Avatar />
    <Animals />
    <PackingList />
    <People />
  </StrictMode>,
);
