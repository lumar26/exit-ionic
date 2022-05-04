import React, { useEffect, useState } from "react";
import {
  IonButton,
  IonCol,
  IonModal,
  IonContent,
  IonGrid,
  IonIcon,
  IonLabel,
  IonRow,
  IonText,
  IonToolbar,
} from "@ionic/react";
import { addCircle } from "ionicons/icons";
import PerformerCard from "../PerformerCard";
import { useHistory } from "react-router";
import PerformerTableRow from "./PerformerTableRow";
import { usePerformers } from "../../../store/PerformersContext";
import AddPerformer from "../AddPerformer";

const PerformersTable: React.FC = () => {
  const [showModalAdd, setShowModalAdd] = useState(false);
  const performersContext = usePerformers();

  useEffect(() => {
    performersContext.getAllPerformers();
  }, []);

  return (
    <IonContent>
      <IonToolbar color="grey" className="tableName">
        <IonModal isOpen={showModalAdd}>
          <AddPerformer />
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
        Performers
      </IonToolbar>
      <IonGrid className="tableGrid">
        <IonRow className="tableRowHeader">
          <IonCol>Name</IonCol>
          <IonCol>Lastname</IonCol>
          <IonCol>Nickname</IonCol>
          <IonCol>Actions</IonCol>
        </IonRow>

        {performersContext.performers &&
          performersContext.performers.map((performer, index) => (
            <PerformerTableRow
              key={index}
              performer={performer}
              index={index}
            />
          ))}
        <IonRow id="currentPerformer">
          {performersContext.selectedPerformer ? (
            <PerformerCard performer={performersContext.selectedPerformer} />
          ) : (
            <IonLabel>
              <br></br>Select performer for more information.
            </IonLabel>
          )}
        </IonRow>
      </IonGrid>
    </IonContent>
  );
};

export default PerformersTable;
