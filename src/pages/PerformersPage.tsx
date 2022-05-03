import React from "react";
import {IonImg} from "@ionic/react";
import PerformerList from "../components/performer/PerformerList";
import {PerformersProvider} from "../store/PerformersContext";
import StandardPageWrapper from "./StandardPageWrapper";

const PerformersPage: React.FC = () => {
    return (
        <PerformersProvider>
            <StandardPageWrapper>
                <IonImg src={"/images/performers.jpeg"} className="img"></IonImg>
                <PerformerList/>
            </StandardPageWrapper>
        </PerformersProvider>
    );
};

export default PerformersPage;
