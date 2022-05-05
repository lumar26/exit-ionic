import React, {useEffect} from "react";
import {IonList} from "@ionic/react";
import PerformerCard from "./PerformerCard";
import {useAuthentication} from "../../store/AuthenticationContext";
import AddPerformerModal from "./admin/AddPerformerModal";
import {usePerformers} from "../../store/PerformersContext";
import Performer from "../../model/Performer";

const PerformersList: React.FC<{
    performers: Array<Performer>
}> = ({performers}) => {
    const authentication = useAuthentication();

    return (
        <>
            {authentication.authenticatedUser
                && authentication.authenticatedUser.role === 'admin'
                && <AddPerformerModal/>}
            <IonList>
                {performers?.map(performer => <PerformerCard key={performer.id} performer={performer}/>)}
            </IonList>
        </>
    );
}
export default PerformersList;