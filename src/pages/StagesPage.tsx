import React from "react";
import StageList from "../components/stage/StageList";
import {StagesProvider} from "../store/StagesContext";
import StandardPageWrapper from "./StandardPageWrapper";
import {IonImg} from "@ionic/react";

const StagesPage: React.FC = () => {
    return (
        <StagesProvider>
            <StandardPageWrapper>
                <IonImg src={"/images/stages.jpeg"} className="img"></IonImg>
                <StageList />
            </StandardPageWrapper>
        </StagesProvider>
    );
}

export default StagesPage;
