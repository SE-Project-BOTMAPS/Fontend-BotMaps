import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { PrimeReactProvider } from 'primereact/api';
import "primereact/resources/themes/lara-light-blue/theme.css";
import {Provider} from "react-redux";
import {store} from "../state/store.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <PrimeReactProvider>
    <React.StrictMode>
        <Provider store={store}>
          <App />
        </Provider>
    </React.StrictMode>
  </PrimeReactProvider>
);
