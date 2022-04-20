import React from "react";
import {IonList} from "@ionic/react";
import StageCard from "./StageCard";
import Stage from "../../model/Stage";

const StageList: React.FC<{
    stages: Array<Stage>,
}> = ({stages}) => {
    return (
        <IonList>
            {stages.map(s => <StageCard key={s.id} stage={s} />)}
        </IonList>
    );
}
export default StageList;