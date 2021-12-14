import React from 'react';

import { Switch, Route, useHistory, useLocation, useRouteMatch, Redirect } from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Artical from './pages/Artical';
import Footer from './components/Footer';

/* function Route({ path, children, exact }) {
  const { pathname } = window.location;

  if (exact) {
    if (pathname === path) {
      return children;
    }
  } else {
    if (pathname.includes(path)) {
      return children;
    }
  }

  return null;
} */

window.localStorage.setItem('token', JSON.stringify({ 1: 'token' }));

function ProtectedRoute({ path, children }) {
  const token = window.localStorage.getItem('token');

  return (
    <Route
      path={path}
      render={() => {
        if (token) {
          return children;
        } else {
          return <Redirect to={'/'} />;
        }
      }}
    />
  );
}

export default function App() {
  // const { pathname } = window.location;
  const history = useHistory();
  const location = useLocation();
  const isArtical = useRouteMatch('/post/:test');
  console.log(history);
  console.log(location);

  function goToArtical(id) {
    history.push(`/post/${id}`);
  }

  return (
    <div className="App">
      <Header />
      <button onClick={() => goToArtical(1)}>Перейти к первой статье</button>
      {isArtical ? <p>Это первая статья</p> : <p>Это все что угодно, только не первая статья</p>}
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/post/:test" exact render={() => <Artical />} />
        <ProtectedRoute path="/profile">
          <h2>Это защищенная страница профайла User</h2>
        </ProtectedRoute>
        <Route>
          <h1 style={{ textAlign: 'center' }}>Страница отсутствует</h1>
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}
