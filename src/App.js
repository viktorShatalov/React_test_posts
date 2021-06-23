import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.scss';

import { Header } from "./components/header/Header"
import { Footer } from "./components/footer/Footer"
import { PostsPages } from "./components/pages/postsPage/PostsPages"
import { Registration } from "./components/pages/registration/Registration"
import { NextPage } from "./components/pages/nextPage/NextPage"

function App() {
  return (
    <>
      <Router>
        <Header />

        <main className="main">
          <Switch>
            <Route exact path="/">
              <PostsPages />
            </Route>
            <Route path="/registration">
              <Registration />
            </Route>
            <Route path="/nextpage">
              <NextPage />
            </Route>
          </Switch>
        </main>

        <Footer />
      </Router>
    </>
  );
}

export default App;
