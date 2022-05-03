import React, {useState} from "react";
import {IonButton, IonIcon, IonModal, IonText, IonToolbar} from "@ionic/react";
import {addCircle} from "ionicons/icons";
import AddStage from "./AddStage";

const AddStageModal : React.FC = () => {
  const [showModalAdd, setShowModalAdd] = useState(false);

  return (
      <IonToolbar>
          <IonModal isOpen={showModalAdd}>
              <AddStage/>
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
              <IonText>Add new stage</IonText>
              <IonIcon icon={addCircle} className="iconMenu" slot="end"></IonIcon>
          </IonButton>
      </IonToolbar>

  );
}

export default AddStageModal;