import Layout from './hoc/Layout/Layout';
import React, { Component } from 'react';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Orders from './containers/Checkout/Orders/Orders';
class App extends Component {

  render() {

    return (
      <div className="App">
        <HashRouter>
          <Layout>
            <Switch>
              <Route path="/checkout" component={Checkout} />
              <Route path='/orders' component={Orders} />
              <Route path="/" exact component={BurgerBuilder} />
            </Switch>
          </Layout>
        </HashRouter>
      </div>
    );
  }
}

export default App;
