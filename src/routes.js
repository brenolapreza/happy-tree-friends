import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";

import Home from './pages/home'
import Login from "./pages/login";
import Register from "./pages/register";

export default function Routes() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
            </Switch>
        </Router>
    )
}