import React from "react";
import {IonButton, IonCol, IonGrid, IonIcon, IonRow,} from "@ionic/react";
import {create, trash} from "ionicons/icons";
import Stage from "../../../model/Stage";
import {useStages} from "../../../store/StagesContext";
import {useHistory} from "react-router-dom";

const PerformerCardAdminControls: React.FC<{
  stage: Stage;
}> = ({ stage }) => {

  const stagesContext = useStages();
  const history = useHistory();

  return (
    <IonGrid>
      <IonCol>
        <IonButton
          onClick={() => stagesContext.deleteStage(stage)}
          expand={"block"}
          color={"danger"}
          id="adminControlsBtn"
        >
          <IonIcon icon={trash} className="tableIcon" size="medium" />
          Delete
        </IonButton>
      </IonCol>
      <IonRow>
        <IonCol>
          <IonButton
            id="adminControlsBtn"
            onClick={() => history.push(`/stages/update/${stage.id}`)}
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
