import {IonButton, IonIcon, IonModal, IonText, IonToolbar} from "@ionic/react";
import {addCircle} from "ionicons/icons";
import React, {useState} from "react";
import AddEventCard from "./AddEventCard";

const AddEventModal = () => {
    const [showModalAdd, setShowModalAdd] = useState(false);

    return (
        <IonToolbar>
            <IonModal
                onIonModalDidDismiss={() => setShowModalAdd(false)}
                isOpen={showModalAdd}
                canDismiss={showModalAdd}>
                <IonButton
                    color="grey"
                    size="default"
                    onClick={() => {
                        setShowModalAdd(false);
                    }}
                >
                    Close
                </IonButton>
                <AddEventCard/>
            </IonModal>
            <IonButton
                onClick={() => setShowModalAdd(true)}
                color="grey"
                expand={'block'}
            >
                <IonText>Add new event</IonText>
                <IonIcon icon={addCircle} className="iconMenu" slot="end"></IonIcon>
            </IonButton>
        </IonToolbar>

    );
}

export default AddEventModal;