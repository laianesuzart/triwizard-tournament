import { Switch, Route } from 'react-router-dom';
import Champions from './pages/Champions';
import Home from './pages/Home';
import Members from './pages/Members';

function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route exact path="/champions">
        <Champions />
      </Route>

      <Route exact path="/members">
        <Members />
      </Route>
    </Switch>
  );
}

export default Routes;
