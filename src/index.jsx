import React from "react";
import ReactDOM from "react-dom";
import getNations from "./getNations";
import getPretenders from "./getPretenders";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import VERSION from "./version";
import "./index.css";
import App from "./App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App
      nations={getNations()}
      pretenders={getPretenders()}
      version={VERSION}
    />
  </StrictMode>
);
