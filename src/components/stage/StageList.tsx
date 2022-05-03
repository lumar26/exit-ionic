import React, {useEffect} from "react";
import {IonList} from "@ionic/react";
import StageCard from "./StageCard";
import {useAuthentication} from "../../store/AuthenticationContext";
import AddStageModal from "./admin/AddStageModal";
import {useStages} from "../../store/StagesContext";

const StageList: React.FC = () => {
    const authentication = useAuthentication();
    const stageContext = useStages();

    useEffect(() => {
        if (!stageContext.stages || stageContext.stages.length < 1)
            stageContext.getAllStages();
    }, [])

    return (
        <>
            {authentication.authenticatedUser
                && authentication.authenticatedUser.role === 'admin'
                && <AddStageModal/>}
            <IonList>
                {stageContext.stages?.map(stage => <StageCard key={stage.id} stage={stage}/>)}
            </IonList>
        </>
    );
}
export default StageList;