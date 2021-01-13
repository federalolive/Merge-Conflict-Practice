import React, { Component } from "react";
import { Route, Redirect, Link } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import Signup from "../Signup/Signup";
import Login from "../Login/Login";
import authService from "../../services/authService";
import Users from '../Users/Users'
import ThingsList from '../ThingsList/ThingsList'
import "./App.css";
import ThingsList from '../../pages/ThingsList/ThingsList'

class App extends Component {
  state = {
    user: authService.getUser(),
    ambersThings: [
      {
      name: 'guitar',
      image: 'data:image/jpeg;base64,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',
      attributes: ['large', 'heavy', 'fun']
      },
      {
        name: 'violin',
        image: 'https://www.electricviolinshop.com/media/catalog/product/cache/8afd2c17391192fbfe0886af1d4292e3/s/k/skull4standardshipwreck_headongoogle_whitebackground.jpg', 
        attributes: ['small', 'fragile', 'classical']
      },
      {
        name: 'bean bag',
        image: 'https://images.squarespace-cdn.com/content/v1/511db456e4b02acb17b6379d/1439962138051-A00FCUU25NWLF5WAN0V4/ke17ZwdGBToddI8pDm48kE3MUHZ9vSBnmdfJVjOam8NZw-zPPgdn4jUwVcJE1ZvWEtT5uBSRWt4vQZAgTJucoTqqXjS3CfNDSuuf31e0tVEzgV-mKhaEvNxa5715rBNx_md7Z42Q7QcfZOBPVOEII6QvevUbj177dmcMs1F0H-0/image-asset.png',
        attributes: ['huge', 'comfy', 'red']
      },
    ],
    jonathansThings: [ 
      {
        name: 'Ice cream',
        image: "https://i.imgur.com/Xs2bYzI.gif",
        image: "https://i.imgur.com/aEhQik1.jpeg",
        attributes: ["Tasty", "Sweet", "Shiny"]
      },
      {
        name: 'Guitar',
        image: "https://i.imgur.com/oo2ilEU.jpeg",
        attributes: ["Started and stopped many times", "Takes time", "Better than bass", "Boomer humor"]
      },
      {
        name: 'Video Games',
        image: "https://i.imgur.com/A58Q5iQ.jpeg",
        attributes: ["Nerdy", "Time sink", "Entertaining"]
      }
    ],
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
      }],
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
        exact path='/ambersthings'
        render={()=>
        <ThingsList
          things={this.state.ambersThings}
        />
      }
      />
      <Route
        exact path='/jonathansthings'
        render={() =>
        <ThingsList 
        things={this.state.jonathansThings}/>
        }
        />
        <Route 
          exact path='/kimsthings'
          render={()=>
            <ThingsList 
                things={this.state.kimsThings}
            />
        }
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
