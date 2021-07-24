import React from 'react';
import { Route, Switch } from 'react-router';

import Join from './components/Join';
import Chat from './components/Chat';

const App = (props) => {
  return (
    <Switch>
      <Route path="/" exact component={Join} />
      <Route path="/chat" exact component={Chat} />
    </Switch>
  );
};

export default App;
