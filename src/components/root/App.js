import React from "react";
import { Route, Switch } from "react-router-dom";
import "../../styles/styles.css";

import Dashboard from "./Dashboard";
import CartPage from "../cart/CartPage";
import NotFound from "../common/NotFound";
import SignIn from "../toolbox/SignIn";
import CreditCard from "../toolbox/CreditCard";
import CreateAcount from "../toolbox/CreateAcount";

export default function App() { 
  return (
    <div className="container-fluid mt-4">
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/cart" component={CartPage} />
        <Route path="/signIn" component={SignIn} />
        <Route path="/creditcard" component={CreditCard} />
        <Route path="/createAcount" component={CreateAcount} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}
