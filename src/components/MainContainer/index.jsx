import { Component } from "react";

import './style.scss';

class MainContainer extends Component {
    render() {
        const { children } = this.props;
        return(
            <main>
                { children }
            </main>
        );
    }
}

export default MainContainer;