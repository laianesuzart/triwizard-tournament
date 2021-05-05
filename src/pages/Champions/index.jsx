import { Component } from "react";
import MainContainer from "../../components/MainContainer";
import Participants from "../../components/Participants";

class Champions extends Component {
    render() {
        const { champList } = this.props;

        return(
            <MainContainer>
                <Participants list={champList}/>
            </MainContainer>
        );
    }
}

export default Champions;