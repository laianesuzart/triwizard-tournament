import { Link } from 'react-router-dom';
import MainContainer from "../../components/MainContainer";

import './style.scss';

function Home({ url, updateUrl }) {
    return(
        <MainContainer>
            <button className="homeBtn" onClick={() => updateUrl(`${url}/students`)}>
                <Link to="/champions">select the champions</Link>
            </button>
        </MainContainer>
    );
}

export default Home;