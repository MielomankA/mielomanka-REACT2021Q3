import React from 'react';
import './style.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { MainPage } from './pages/MainPage';
import { Header } from '../components/Header';
import { ErrorPage } from './pages/ErrorPage';
import { AboutPage } from './pages/AboutPage';

export const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <MainPage />
        </Route>
        <Route path="/about">
          <AboutPage />
        </Route>
        <Route path="*">
          <ErrorPage />
        </Route>
      </Switch>
    </Router>
  );
};
