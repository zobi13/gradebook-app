import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import AppGradebooks from "./pages/AppGradebooks";
import SingleGradebook from "./pages/SingleGradebook";
import AddGradebook from "./pages/AddGradebook";
import AddStudents from "./pages/AddStudents";
import MyGradebook from "./pages/MyGradebook";
import EditGradebook from "./pages/EditGradebook";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AppTeachers from './pages/AppTeachers';
import SingleTeacher from './pages/SingleTeacher';
import PrivateRoute from './Components/shared/PrivateRoute';
import GuestRoute from './Components/shared/GuestRoute';
import Navbar from './Components/Navbar';
import { getActiveUser, selectIsAuthenticated } from "./store/auth";

function App() {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(selectIsAuthenticated);

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(getActiveUser());
    }
  }, []);

  return (
    <div className='App' >
      <Router>
        <Navbar/>
        <Switch>
          {/* Trebali bi biti private route */}
          <PrivateRoute exact path='/'>
            <AppGradebooks />
          </PrivateRoute>
          <PrivateRoute exact path='/gradebooks/:id'>
            <SingleGradebook />
          </PrivateRoute>
          <PrivateRoute path='/gradebooks/create'>
            <AddGradebook />
          </PrivateRoute>
          <PrivateRoute path='/gradebooks/:id/edit'>
            <EditGradebook />
          </PrivateRoute>
          <PrivateRoute path='/my-gradebook'>
            <MyGradebook />
          </PrivateRoute>
          <PrivateRoute path='/gradebooks/:id/students/create'>
            <AddStudents />
          </PrivateRoute>reate
          <PrivateRoute exact path='/teachers'>
            <AppTeachers />
          </PrivateRoute>
          <PrivateRoute path='/teachers/"id'>
            <SingleTeacher />
          </PrivateRoute>
          {/* A ovi guest rute */}
          <GuestRoute path='/login'>
            <Login />
          </GuestRoute>
          <GuestRoute path='/register' >
            <Register />
          </GuestRoute>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
