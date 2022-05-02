import React, {useState} from "react";
import {IonButton, IonCol, IonIcon, IonModal, IonRow} from "@ionic/react";
import UpdatePerformerForm from "./UpdatePerformerForm";
import {create, trash} from "ionicons/icons";
import Performer from "../../../model/Performer";
import {usePerformers} from "../../../store/PerformersContext";

const PerformerTableRow: React.FC<{
    performer: Performer,
    index: number
}> = ({performer, index}) => {

    const [showModalUpdate, setShowModalUpdate] = useState(false);
    const performersContext = usePerformers();

    return (
        <IonRow
            className={
                "list-group-item " + (index === performersContext.performers?.indexOf(performer) ? "active" : "")
            }
            onClick={() => {
                performersContext.selectPerformer(performer)
            }}
            key={index}
            id="tableRow"
        >
            <IonCol className="tableColContent">{performer.name}</IonCol>
            <IonCol className="tableColContent">{performer.surname}</IonCol>
            <IonCol className="tableColContent">{performer.nick}</IonCol>
            <IonCol>
                <IonModal
                    onIonModalDidDismiss={() => setShowModalUpdate(false)}
                    isOpen={showModalUpdate}
                >
                    <UpdatePerformerForm performer={performer}/>
                    <IonButton
                        color="grey"
                        size="default"
                        onClick={() => {
                            performersContext.selectPerformer(performer)
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
                        performersContext.deletePerformer(performer);
                    }}
                >
                    <IonIcon
                        icon={trash}
                        className="tableIcon"
                        size="large"
                    ></IonIcon>
                </IonButton>
            </IonCol>
        </IonRow>
    );
}

export default PerformerTableRow;