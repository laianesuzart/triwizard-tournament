import { Component } from "react";
import CharList from "../../components/CharList";
import MainContainer from "../../components/MainContainer";

class Members extends Component {
    render() {
        const { list, url, updateUrl } = this.props;

        return(
            <MainContainer>
                <CharList list={list} url={url} updateUrl={updateUrl}/>
            </MainContainer>
        );
    }
}

export default Members;