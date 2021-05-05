import { Component } from "react";
import MainContainer from "../../components/MainContainer";
import Participants from "../../components/Participants";

class Champions extends Component {
    render() {
        const { list, url, updateUrl, loading } = this.props;

        return(
            <MainContainer>
                <Participants list={list} url={url} updateUrl={updateUrl} loading={loading}/>
            </MainContainer>
        );
    }
}

export default Champions;