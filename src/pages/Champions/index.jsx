import { Component } from "react";
import MainContainer from "../../components/MainContainer";
import Participants from "../../components/Participants";

class Page extends Component {
    render() {
        const { list } = this.props;

        return(
            <MainContainer>
                <Participants list={list}/>
            </MainContainer>
        );
    }
}

export default Page;