import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Error from './components/Error';
import Navigation from './components/Navigation';
import Footer from './components/Footer';


class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="background">
          <Navigation />
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/Projects" component={Projects} />
              <Route path="/Contact" component={Contact} />
              <Route component={Error} />
            </Switch>
          <div className="Footer">
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;