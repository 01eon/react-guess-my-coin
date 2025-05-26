import { StrictMode } from "react";
import { BrowserRouter } from "react-router";
import { createRoot } from "react-dom/client";
import { GameProvider } from "./context/game.context";
import App from "./App";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <GameProvider>
      <App />
    </GameProvider>
  </BrowserRouter>
);
