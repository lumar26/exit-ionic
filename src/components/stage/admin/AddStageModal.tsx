import React, { useState } from "react";
import {
  IonButton,
  IonIcon,
  IonModal,
  IonText,
  IonToolbar,
} from "@ionic/react";
import { addCircle, closeCircleOutline } from "ionicons/icons";
import AddStage from "./AddStage";

const AddStageModal: React.FC = () => {
  const [showModalAdd, setShowModalAdd] = useState(false);

  return (
    <IonToolbar>
      <IonModal isOpen={showModalAdd}>
        <IonButton
          color="white"
          size="large"
          className="buttonCloseModal"
          onClick={() => {
            setShowModalAdd(false);
          }}
        >
          <IonIcon icon={closeCircleOutline} slot="end" color="grey" />
        </IonButton>
        <AddStage />
      </IonModal>
      <IonButton
        onClick={() => setShowModalAdd(true)}
        slot="end"
        color="grey"
        expand={"block"}
      >
        <IonText>Add new stage</IonText>
        <IonIcon icon={addCircle} className="iconMenu" slot="end"></IonIcon>
      </IonButton>
    </IonToolbar>
  );
};

export default AddStageModal;
