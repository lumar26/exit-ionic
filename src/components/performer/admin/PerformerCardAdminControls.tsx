import React, {useState} from "react";
import {IonButton, IonCol, IonGrid, IonIcon, IonModal, IonRow} from "@ionic/react";
import {create, trash} from "ionicons/icons";
import Performer from "../../../model/Performer";
import {usePerformers} from "../../../store/PerformersContext";
import UpdatePerformerForm from "./UpdatePerformerForm";

const PerformerCardAdminControls: React.FC<{
    performer: Performer
}> = ({performer}) => {

    const [showModalUpdate, setShowModalUpdate] = useState(false);


    const performersContext = usePerformers();

    const deletePerformer = () => {
        performersContext.deletePerformer(performer);
    };
    return (
        <IonGrid>
            <IonRow>
                <IonCol>
                    <IonButton
                        onClick={deletePerformer}
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
                    <UpdatePerformerForm performer={performer}/>
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