import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Switch, useHistory } from "react-router-dom";
import { selectGradebooks } from "../store/gradebooks/selectors";
import { deleteGradebook, getGradebooks } from "../store/gradebooks/slice";
import AppGradebooks from "./AppGradebooks";

export default function Home() {
    <Router>
        <Switch>
            <PrivateRoute>
                <AppGradebooks />
            </PrivateRoute>
        </Switch>
    </Router>
}