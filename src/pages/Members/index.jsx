import CharList from "../../components/CharList";
import MainContainer from "../../components/MainContainer";

function Members({ list, url, updateUrl }) {
        return(
            <MainContainer>
                <CharList list={list} url={url} updateUrl={updateUrl}/>
            </MainContainer>
        );
}

export default Members;