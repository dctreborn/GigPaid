import React from "react";
import router from "react-router";

import {
    Route,
    IndexRoute,
    Router,
    browserHistory
} from router;

import EmpProfile from "../components/EmpProfile";
import Main from "../components/Main";
import Search from "../components/Search";
import TalentProfile from "../components/TalentProfile";

const routes = () => {
    <Router history={browserHistory}>
        <Route path="/" component={Main}>
            <Route path="Search" component={Search}/>
            <Route path="EmpProfile" component={EmpProfile}/>
            <Route path="TalentProfile" component={TalentProfile}/>
        </Route>
    </Router>
};

export default routes;