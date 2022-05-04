import React, { useEffect, useState } from "react";
import {
  IonButton,
  IonCard,
  IonCol,
  IonGrid,
  IonIcon,
  IonModal,
  IonRow,
  IonText,
  IonToolbar,
} from "@ionic/react";
import { addCircle } from "ionicons/icons";
import AddStage from "./AddStage";
import { useStages } from "../../../store/StagesContext";
import StagesTableRow from "./StagesTableRow";

const StagesTable: React.FC = () => {
  const [showModalAdd, setShowModalAdd] = useState(false);
  const stagesContext = useStages();

  useEffect(() => {
    stagesContext.getAllStages();
  }, []);

  return (
    <IonCard>
      <IonToolbar color="grey" className="tableName">
        <IonModal isOpen={showModalAdd}>
          <AddStage />
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
        >
          <IonText>Add</IonText>
          <IonIcon icon={addCircle} className="iconMenu" slot="end"></IonIcon>
        </IonButton>
        Stages
      </IonToolbar>
      <IonGrid className="tableGrid">
        <IonRow className="tableRowHeader">
          <IonCol>Name</IonCol>
          <IonCol>Location</IonCol>
          <IonCol>Capacity</IonCol>
          <IonCol>Sponsor</IonCol>
          <IonCol>Actions</IonCol>
        </IonRow>

        {stagesContext.stages &&
          stagesContext.stages.map((stage, index) => (
            <StagesTableRow stage={stage} key={index} index={index} />
          ))}
      </IonGrid>
    </IonCard>
  );
};

export default StagesTable;
