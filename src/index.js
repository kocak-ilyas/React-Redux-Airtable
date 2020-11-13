import React from "react";
import ReactDOM from "react-dom";
import App from "./components/root/App";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "alertifyjs/build/css/alertify.min.css";
import configureStore from "./redux/reducers/configureStore"
const store = configureStore()

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter><App /></BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);