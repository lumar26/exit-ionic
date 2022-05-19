import React, {createContext, useContext, useState} from "react";
import {useAuthentication} from "./AuthenticationContext";
import Stage from "../model/Stage";
import {addStageApi, deleteStageApi, getAllStagesApi, updateStageApi} from "../api/stagesApi";

type StagesContextType = {
    stages: Array<Stage>;
    selectedStage: Stage | null | undefined;
    addStage: (stage: Stage) => void;
    deleteStage: (stage: Stage) => void;
    updateStage: (stage: Stage, id: number) => void;
    getAllStages: () => void;
    selectStage: (stage: Stage) => void;
};

const StagesContext = createContext<StagesContextType>({
    stages: [],
    selectedStage: null,
    addStage: () => {
    },
    updateStage: () => {
    },
    deleteStage: () => {
    },
    getAllStages: () => {
    },
    selectStage: () => {
    },
});

export const useStages = () => {
    return useContext(StagesContext);
};

export const StagesProvider: React.FC = (props) => {
    const authentication = useAuthentication();
    const requestConfig: any = {
        headers: {
            'Authorization': authentication.accessToken as string
        }
    }
    const [stages, setStages] = useState<Array<Stage>>();
    const [selectedStage, setSelectedStage] = useState<Stage | null>();

    const selectStage = (stage: Stage) => {
        setSelectedStage(stage);
    };

    const getAllStages = () => {
        getAllStagesApi(requestConfig)
            .then((stages) => {
                setStages(stages);
            })
            .catch(error => {
                console.log(error)
                setStages([]);
            })
    };

    const addStage = (stage: Stage) => {
        addStageApi(stage, requestConfig)
            .then(stage => {
                stages!.push(stage);
                setStages(stages);
            })
            .catch(error => console.log(error)) // todo: handle error
    };

    const updateStage = (stage: Stage, id: number) => {
        updateStageApi(stage, id, requestConfig)
            .then(updatedStage => {
                let oldStage = stages?.find((stage) => stage.id === id);
                if (!oldStage) {
                    stages?.push(updatedStage);
                } else {
                    // updating fields manually
                }
                setStages(stages);
            })
            .catch((e) => {
                console.log(e);
            });
    };

    const deleteStage = (stage: Stage) => {
        deleteStageApi(stage, requestConfig)
            .then(deletedStage => setStages(stages?.filter((stage) => stage.id !== deletedStage!.id)))
            .catch(error => console.log(error));
    };

    const context: StagesContextType = {
        stages: stages!,
        selectedStage: selectedStage,
        getAllStages: getAllStages,
        addStage: addStage,
        deleteStage: deleteStage,
        updateStage: updateStage,
        selectStage: selectStage,
    };

    return (
        <StagesContext.Provider value={context}>
            {props.children}
        </StagesContext.Provider>
    );
};
