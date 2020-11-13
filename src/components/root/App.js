import React from "react";
import { Route, Switch } from "react-router-dom";
import "../../styles/styles.css";

import Dashboard from "./Dashboard";
import CartPage from "../cart/CartPage";
import NotFound from "../common/NotFound";
import FormDemo from "../ex/FormDemo";

export default function App() {
  return (
    <div className="container-fluid mt-4">
      <FormDemo/>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/cart" component={CartPage} />
        {/* <Route exact path="/form" component={FormDemo} /> */}
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}
