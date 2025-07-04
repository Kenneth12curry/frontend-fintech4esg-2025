import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import "@/lib/i18n"; // Initialisation de i18next

// Inject Buffer global polyfill
import * as BufferModule from 'buffer'
window.Buffer = BufferModule.Buffer

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />  
  </React.StrictMode>
);
