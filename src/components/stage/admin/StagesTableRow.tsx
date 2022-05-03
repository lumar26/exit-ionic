import {IonButton, IonCol, IonIcon, IonModal, IonRow} from "@ionic/react";
import UpdateStageForm from "./UpdateStageForm";
import {create, trash} from "ionicons/icons";
import React, {useState} from "react";
import Stage from "../../../model/Stage";
import {useStages} from "../../../store/StagesContext";

const StagesTableRow: React.FC<{
    stage: Stage,
    index: number
}> = ({stage, index}) => {

    const [showModalUpdate, setShowModalUpdate] = useState(false);
    const stagesContext = useStages();

    return (
        <IonRow
            className={
                "list-group-item " + (index === stagesContext.stages?.indexOf(stage) ? "active" : "")
            }
            onClick={() => stagesContext.selectStage(stage)}
            key={index}
            id="tableRow"
        >
            <IonCol className="tableColContent">{stage.name}</IonCol>
            <IonCol className="tableColContent">{stage.location}</IonCol>
            <IonCol className="tableColContent">{stage.capacity}</IonCol>
            <IonCol className="tableColContent">{stage.sponsor}</IonCol>
            <IonCol>
                <IonModal
                    onIonModalDidDismiss={() => setShowModalUpdate(false)}
                    isOpen={showModalUpdate}>
                    <UpdateStageForm stage={stage}/>
                    <IonButton
                        color="grey"
                        size="default"
                        onClick={() => {
                            stagesContext.selectStage(stage);
                            setShowModalUpdate(false);
                        }}
                    >
                        Close
                    </IonButton>
                </IonModal>
                <IonButton
                    onClick={() => setShowModalUpdate(true)}
                    color="light"
                >
                    <IonIcon
                        icon={create}
                        className="tableIcon"
                        color="grey"
                        size="large"
                    ></IonIcon>
                </IonButton>
                <IonButton
                    color="red"
                    onClick={() => {
                        stagesContext.deleteStage(stage);
                    }}
                >
                    <IonIcon
                        icon={trash}
                        className="tableIcon"
                        size="large"
                    ></IonIcon>
                </IonButton>
            </IonCol>
        </IonRow>);
}

export default StagesTableRow;