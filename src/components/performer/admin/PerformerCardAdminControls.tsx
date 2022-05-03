import React from "react";
import {IonButton, IonCol, IonGrid, IonIcon, IonRow} from "@ionic/react";
import {create, trash} from "ionicons/icons";
import Performer from "../../../model/Performer";

const PerformerCardAdminControls : React.FC<{
    performer: Performer
}> = ({performer}) => {
  return (
      <IonGrid>
          <IonRow>
              <IonCol>
                  <IonButton expand={"block"} color={'danger'}>
                      <IonIcon
                          icon={trash}
                          className="tableIcon"
                          size="medium"
                      />
                      Delete
                  </IonButton>
              </IonCol>
          </IonRow>
          <IonRow>
              <IonCol>
                  <IonButton expand={"block"}>
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
}

export default PerformerCardAdminControls;