import {IonButton, IonIcon, IonModal, IonText, IonToolbar} from "@ionic/react";
import {addCircle} from "ionicons/icons";
import React, {useState} from "react";
import AddEvent from "./AddEvent";

const AddEventModal = () => {
  const [showModalAdd, setShowModalAdd] = useState(false);

  return (
      <IonToolbar>
        <IonModal isOpen={showModalAdd}>
          <AddEvent/>
          <IonButton
              color="grey"
              size="default"
              onClick={() => {
                setShowModalAdd(false);
              }}
          >
            Close
          </IonButton>
        </IonModal>
        <IonButton
            onClick={() => setShowModalAdd(true)}
            slot="end"
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