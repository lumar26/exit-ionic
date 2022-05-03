import React from "react";
import StageList from "../components/stage/StageList";
import {StagesProvider, useStages} from "../store/StagesContext";
import StandardPageWrapper from "./StandardPageWrapper";

const StagesPage: React.FC = () => {
    return (
        <StagesProvider>
            <StandardPageWrapper>
                <StageList />
            </StandardPageWrapper>
        </StagesProvider>
    );
}

export default StagesPage;