import { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Champions from './pages/Champions';
import Home from './pages/Home';
import Members from './pages/Members';

class Routes extends Component {
    render() {
        const { list } = this.props;

        return(
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>

                <Route exact path="/champions" render={props => <Champions {...props} list={list}/>}/>
                  
                <Route exact path="/members">
                    <Members/>
                </Route>
            </Switch>
        );
    }
}

export default Routes;