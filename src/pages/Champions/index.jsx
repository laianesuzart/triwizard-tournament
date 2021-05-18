import MainContainer from "../../components/MainContainer";
import Participants from "../../components/Participants";

function Champions({ champList } ) {
    return(
        <MainContainer>
            <Participants list={champList}/>
        </MainContainer>
    );
}

export default Champions;