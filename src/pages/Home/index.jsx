import { Component } from "react";
import { Link } from 'react-router-dom';
import MainContainer from "../../components/MainContainer";

import './style.scss';

class Page extends Component {
    render() {
        return(
            <MainContainer>
                <button className="homeBtn">
                    <Link to="/champions">select the champions</Link>
                </button>
            </MainContainer>
        );
    }
}

export default Page;