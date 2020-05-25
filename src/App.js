import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignPage from "./pages/sign-in-and-sign-up/sign-page.component";

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    // 觀察者onAuthStateChanged 監測有無用戶登入 有：user=object 無：user=null
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      // User is signed in.
      if (userAuth) {
        // console.log("userAuth from componentDidMount");
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapshot) => {
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data(),
            },
          });
        });

        // logged out,then set currentUser to null
      } else {
        this.setState({ currentUser: userAuth });
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />

          <Route path="/shop" component={ShopPage} />

          <Route path="/sign" component={SignPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
