import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import AboutMe from './components/AboutMe';
import Header from './components/Header';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Switch>
          <Route exact path="/" component={AboutMe} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/contact" component={Contact} />
            <Route path="/resume" component={Resume} />
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
