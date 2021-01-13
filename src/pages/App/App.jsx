import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import Signup from "../Signup/Signup";
import Login from "../Login/Login";
import authService from "../../services/authService";
import Users from '../Users/Users'
import "./App.css";
import ThingsList from "../Things List/ThingsList";
import {Link} from 'react-router-dom'

class App extends Component {
  state = {
    user: authService.getUser(),
    kimsThings: [
      {
        name: 'cat',
        image: 'https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/cat_relaxing_on_patio_other/1800x1200_cat_relaxing_on_patio_other.jpg',
        attributes: ['soft', 'furry', 'loveable', 'fickle']
      },
      {
        name: 'ice cream',
        image: 'https://www.benjerry.com/files/live/sites/systemsite/files/flavors/products/us/pint/choc-chip-cookie-dough-detail.png',
        attributes: ['good', 'great', 'gods food']
      },
      {
        name: 'hair products',
        image: 'https://www.naturallycurly.com/wp-content/uploads/2013/11/ethnic-aisle.jpg',
        attributes: ['essential', 'numerous', 'expensive']
      }
    ]
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
          exact path='/kimsthings'
          render={()=>
            <ThingsList 
                things={this.state.kimsThings}
            />
        }
        />
      </>
    );
  }
}

export default App;
