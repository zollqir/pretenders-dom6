import React from 'react';
import getNations from './getNations';
import getPretenders from './getPretenders';
import VERSION from './version';
import './index.css';
import App from './App';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App
      nations={getNations()}
      pretenders={getPretenders()}
      version={VERSION}
    />
  </StrictMode>
);