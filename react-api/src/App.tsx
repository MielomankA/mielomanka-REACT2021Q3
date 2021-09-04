import React from 'react';
import './style.css';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { MainPage } from './pages/MainPage';
import { Header } from '../components/Header';
import { ErrorPage } from './pages/ErrorPage';
import { AboutPage } from './pages/AboutPage';
import { Details } from './pages/DetailsPage';

export const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <MainPage />
        </Route>
        <Route exact path="/about">
          <AboutPage />
        </Route>
        <Route exact path="/details/*">
          <Details />
        </Route>
        <Route exact path="*">
          <ErrorPage />
        </Route>
      </Switch>
    </Router>
  );
};
