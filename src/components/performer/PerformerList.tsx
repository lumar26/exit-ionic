import React from "react";
import {IonList} from "@ionic/react";
import PerformerCard from "./PerformerCard";
import Performer from "../../model/Performer";
import {useAuthentication} from "../../store/AuthenticationContext";
import AddPerformerModal from "./admin/AddPerformerModal";

const PerformersList: React.FC<{
    performers: Array<Performer>,
}> = ({performers}) => {
    const authentication = useAuthentication();

    return (
        <>
            {authentication.authenticatedUser
                && authentication.authenticatedUser.role === 'admin'
                && <AddPerformerModal/>}
            <IonList>
                {performers.map(performer => <PerformerCard key={performer.id} performer={performer}/>)}
            </IonList>
        </>


    );
}
export default PerformersList;