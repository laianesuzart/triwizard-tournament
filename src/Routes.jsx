import { Switch, Route } from 'react-router-dom';
import Champions from './pages/Champions';
import Home from './pages/Home';
import Members from './pages/Members';

function Routes({ list, url, updateUrl, champList }) {
    return(
        <Switch>
            <Route exact path="/">
                <Home url={url} updateUrl={updateUrl}/>
            </Route>

            <Route exact path="/champions">
                <Champions champList={champList}/>
            </Route>
                
            <Route exact path="/members">
                <Members list={list} url={url} updateUrl={updateUrl}/>
            </Route>
        </Switch>
    );
}

export default Routes;