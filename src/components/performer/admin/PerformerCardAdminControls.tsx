import React, {useState} from "react";
import {IonButton, IonCol, IonGrid, IonIcon, IonModal, IonRow,} from "@ionic/react";
import {create, trash} from "ionicons/icons";
import Performer from "../../../model/Performer";
import {usePerformers} from "../../../store/PerformersContext";
import UpdatePerformerCard from "./UpdatePerformerCard";
import {useHistory} from "react-router-dom";

const PerformerCardAdminControls: React.FC<{
  performer: Performer;
}> = ({ performer }) => {
  const [showModalUpdate, setShowModalUpdate] = useState(false);

  const performersContext = usePerformers();

  const history = useHistory();

  const deletePerformer = () => {
    performersContext.deletePerformer(performer);
  };
  return (
    <IonGrid id="adminControlsBtn">
      <IonCol>
        <IonButton
          id="adminControlsBtn"
          onClick={deletePerformer}
          expand={"block"}
          color={"danger"}
        >
          <IonIcon icon={trash} className="tableIcon" size="medium" />
          Delete
        </IonButton>
      </IonCol>
      <IonRow>
        <IonModal
          onIonModalDidDismiss={() => setShowModalUpdate(false)}
          isOpen={showModalUpdate}
        >
          <UpdatePerformerCard performer={performer} />
          <IonButton color="grey" onClick={() => setShowModalUpdate(false)}>
            Close
          </IonButton>
        </IonModal>
        <IonCol>
          <IonButton
            id="adminControlsBtn"
            onClick={() => history.push(`performers/update/${performer.id}`)}
            expand={"block"}
          >
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
};

export default PerformerCardAdminControls;
