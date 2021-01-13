import React, { Component } from "react";
import { Route, Redirect, Link } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import Signup from "../Signup/Signup";
import Login from "../Login/Login";
import authService from "../../services/authService";
import Users from '../Users/Users'
import ThingsList from '../ThingsList/ThingsList'
import "./App.css";

class App extends Component {
  state = {
    user: authService.getUser(),
    erinThings: [
      {
        name: 'Circe',
        image: 'https://picsum.photos/200/300',
        attributes: ['black and white', 'cuddly', 'cat']
      },
      {
        name: 'Nadia',
        image: 'https://picsum.photos/200/300',
        attributes: ['cat', 'fluffy', 'tan']
      },
      {
        name: 'Casey',
        image: 'https://picsum.photos/200/300',
        attributes: ['dog', 'lab', 'cute']
      },
      {
        name: 'Archie',
        image: 'https://picsum.photos/200/300',
        attributes: ['pitbull', 'dog', 'funny']
      }
    ],
  };

  handleLogout = () => {
    authService.logout();
    this.setState({ user: null });
    this.props.history.push("/");
  };

  handleSignupOrLogin = () => {
    this.setState({ user: authService.getUser() });
  };

  render() {
    const { user } = this.state
    return (
      <>
        <NavBar user={this.state.user} handleLogout={this.handleLogout}/>
        <Route
          exact
          path="/"
          render={() => (
            <main>
              <h1>Welcome. This is an authorization template.</h1>
            </main>
          )}
        />
        <Route
          exact
          path="/signup"
          render={({ history }) => (
            <Signup
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          )}
        />
        <Route
          exact
          path="/login"
          render={({ history }) => (
            <Login
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          )}
        />
        <Route
          exact
          path="/users"
          render={() =>
            user ? <Users /> : <Redirect to="/login" />
          }
        />
        <Route
            exact path='/erinsthings'
            render={() =>
              <ThingsList 
                things={this.state.erinThings}
              />
            }
            />
      </>
    );
  }
}

export default App;
