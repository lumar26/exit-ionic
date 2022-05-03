import React, {useState} from "react";
import {IonButton, IonCol, IonGrid, IonIcon, IonModal, IonRow} from "@ionic/react";
import {create, trash} from "ionicons/icons";
import Stage from "../../../model/Stage";
import {useStages} from "../../../store/StagesContext";
import UpdateStageForm from "./UpdateStageForm";

const PerformerCardAdminControls: React.FC<{
    stage: Stage
}> = ({stage}) => {

    const [showModalUpdate, setShowModalUpdate] = useState(false);


    const stagesContext = useStages();

    const deleteStage = () => {
        stagesContext.deleteStage(stage);
        console.log('Deleting stage')
    };
    return (
        <IonGrid>
            <IonRow>
                <IonCol>
                    <IonButton
                        onClick={deleteStage}
                        expand={"block"} color={'danger'}>
                        <IonIcon
                            icon={trash}
                            className="tableIcon"
                            size="medium"
                        />
                        Delete
                    </IonButton>
                </IonCol>
            </IonRow>
            <IonRow>
                <IonModal
                    onIonModalDidDismiss={() => setShowModalUpdate(false)}
                    isOpen={showModalUpdate}
                >
                    <UpdateStageForm stage={stage}/>
                    <IonButton
                        color="grey"
                        size="default"
                        onClick={() => setShowModalUpdate(false)}
                    >
                        Close
                    </IonButton>
                </IonModal>
                <IonCol>
                    <IonButton
                        onClick={() => setShowModalUpdate(true)}
                        expand={"block"}>
                        <IonIcon
                            icon={create}
                            className="tableIcon"
                            color="white"
                            size="medium"
                        />
                        Update
                    </IonButton>
                </IonCol>
            </IonRow>
        </IonGrid>
    );
}

export default PerformerCardAdminControls;