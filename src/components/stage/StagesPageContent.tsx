import {IonImg} from "@ionic/react";
import React, {useEffect} from "react";
import {useStages} from "../../store/StagesContext";
import StageList from "./StageList";

const StagesPageContent = () => {
    const stagesContext = useStages();

    useEffect(() => {
        stagesContext.getAllStages();
    }, []);

    return (
        <>
            <IonImg src={"/images/stages.jpeg"} className="img"></IonImg>
            <StageList stages={stagesContext.stages}/>
        </>
    );
}

export default StagesPageContent;