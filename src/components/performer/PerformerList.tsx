import React, {useEffect} from "react";
import {IonList} from "@ionic/react";
import PerformerCard from "./PerformerCard";
import {useAuthentication} from "../../store/AuthenticationContext";
import AddPerformerModal from "./admin/AddPerformerModal";
import {usePerformers} from "../../store/PerformersContext";

const PerformersList: React.FC = () => {
    const authentication = useAuthentication();
    const performersContext = usePerformers();

    useEffect(() => {
        if (!performersContext.performers || performersContext.performers.length < 1)
            performersContext.getAllPerformers();
    }, [])

    return (
        <>
            {authentication.authenticatedUser
                && authentication.authenticatedUser.role === 'admin'
                && <AddPerformerModal/>}
            <IonList>
                {performersContext.performers?.map(performer => <PerformerCard key={performer.id} performer={performer}/>)}
            </IonList>
        </>
    );
}
export default PerformersList;