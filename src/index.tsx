import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { GlobalStateProvider } from "./context/global-context";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement!);

root.render(
  <StrictMode>
    <GlobalStateProvider>
      <App />
    </GlobalStateProvider>
  </StrictMode>
);
