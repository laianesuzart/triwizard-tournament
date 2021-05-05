import { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Champions from './pages/Champions';
import Home from './pages/Home';
import Members from './pages/Members';

class Routes extends Component {
    render() {
        const { list, url, updateUrl, loading } = this.props;

        return(
            <Switch>
                <Route exact path="/" render={props => <Home {...props} url={url} updateUrl={updateUrl}/>}/>
  

                <Route exact path="/champions" render={props => <Champions {...props} list={list} url={url} updateUrl={updateUrl} loading={loading}/>}/>
                  
                <Route exact path="/members" render={props => <Members {...props} list={list} url={url} updateUrl={updateUrl}/>}/>
            </Switch>
        );
    }
}

export default Routes;