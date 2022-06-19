import {IonImg, IonSearchbar} from "@ionic/react";
import React, {useEffect, useState} from "react";
import {useStages} from "../../store/StagesContext";
import StageList from "./StageList";
import AddStageButton from "./admin/AddStageButton";
import {useAuthentication} from "../../store/AuthenticationContext";
import ErrorNotification from "../error/ErrorNotification";
import {useError} from "../../store/ErrorContext";

const StagesPageContent = () => {
    const stagesContext = useStages();
    const authentication = useAuthentication();
    const {error} = useError()

    const [searchCondition, setSearchCondition] = useState("");

    let displayedStages = searchCondition
        ? stagesContext.stages.filter(stage => stage.name.includes(searchCondition) || stage.sponsor.includes(searchCondition) || stage.location.includes(searchCondition))
        : stagesContext.stages

    useEffect(() => {
        stagesContext.getAllStages();
    }, []);

    return (
        <>
            {error && <ErrorNotification/>}
            <IonImg src={"/images/stages.jpeg"} className="img"/>
            {authentication.authenticatedUser &&
                authentication.role === "ROLE_ADMIN" && <AddStageButton/>}
            <IonSearchbar
                value={searchCondition}
                onIonChange={e => setSearchCondition(e.detail.value!.trim())}/>
            <StageList stages={displayedStages}/>
        </>
    );
};

export default StagesPageContent;
