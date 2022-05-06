import React, { useState } from "react";
import {
  IonButton,
  IonIcon,
  IonModal,
  IonText,
  IonToolbar,
} from "@ionic/react";
import AddPerformer from "./AddPerformer";
import { addCircle, closeCircleOutline } from "ionicons/icons";

const AddPerformerModal: React.FC = () => {
  const [showModalAdd, setShowModalAdd] = useState(false);

  return (
    <IonToolbar color="light">
      <IonModal isOpen={showModalAdd}>
        <IonButton
          color="white"
          size="large"
          className="buttonCloseModal"
          slot="end"
          onClick={() => {
            setShowModalAdd(false);
          }}
        >
          <IonIcon icon={closeCircleOutline} slot="end" color="grey" />
        </IonButton>
        <AddPerformer />
      </IonModal>
      <IonButton
        onClick={() => setShowModalAdd(true)}
        slot="end"
        color="grey"
        expand={"block"}
      >
        <IonText>Add new performer</IonText>
        <IonIcon icon={addCircle} className="iconMenu" slot="end"></IonIcon>
      </IonButton>
    </IonToolbar>
  );
};

export default AddPerformerModal;
