import React from "react";
import {IonList} from "@ionic/react";
import StageCard from "./StageCard";
import Stage from "../../model/Stage";

const StageList: React.FC<{
    stages: Array<Stage>,
}> = ({stages}) => {
    return (
        <IonList>
            {stages.map(stage => <StageCard key={stage.id} stage={stage} />)}
        </IonList>
    );
}
export default StageList;