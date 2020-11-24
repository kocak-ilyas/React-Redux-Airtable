import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import "../../styles/styles.css";

import Dashboard from "./Dashboard";
import CartPage from "../cart/CartPage";
import NotFound from "../common/NotFound";
import FormDemo from "../ex/FormDemo";
import { Badge } from "reactstrap";

export default function App() {
  return (
    <div className="container-fluid mt-4">
      <Link to="form">
        <Badge color="warning">Go to Form</Badge>
      </Link>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/cart" component={CartPage} />
        <Route path="/form" component={FormDemo} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}
