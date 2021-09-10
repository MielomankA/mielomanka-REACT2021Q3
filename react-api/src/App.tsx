import React from 'react';
import './style.css';
import { HashRouter as Router, Switch, Route, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { MainPage } from './pages/MainPage';
import { Header } from '../components/Header';
import { ErrorPage } from './pages/ErrorPage';
import { AboutPage } from './pages/AboutPage';
import { Details } from './pages/DetailsPage';

function Content(): JSX.Element {
  const location = useLocation();

  return (
    <TransitionGroup>
      <CSSTransition timeout={500} classNames="fade" key={location.key}>
        <Switch location={location}>
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
      </CSSTransition>
    </TransitionGroup>
  );
}

export const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Content />
    </Router>
  );
};
