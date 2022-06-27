import React from "react";
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router } from "react-router-dom";

import App from './App';
import { StateProvider } from "./components/contex/StateProvider";
import reducer from "./components/contex/reducer";
import { initialState } from "./components/contex/initialState";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <StateProvider initialState={initialState} reducer={reducer}>
    <App />
    </StateProvider>
  </Router>
);