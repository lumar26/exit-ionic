import React from "react";
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonIcon,
  IonImg,
  IonLabel,
  IonRow,
} from "@ionic/react";
import Stage from "../../model/Stage";
import { cashOutline, locationOutline, peopleOutline } from "ionicons/icons";
import { useAuthentication } from "../../store/AuthenticationContext";
import StageCardAdminControls from "./admin/StageCardAdminControls";

const StageCard: React.FC<{
  stage: Stage;
}> = ({ stage }) => {
  const authentication = useAuthentication();
  return (
    <>
      <IonCard className="stageCard">
        <IonCardHeader className="picture">
          <IonImg src={stage.image} className="img"></IonImg>
        </IonCardHeader>
        <IonCardContent className="stageContent">
          <br />
          <IonLabel className="stageName" color="grey">
            {stage.name}
          </IonLabel>

          {authentication.authenticatedUser &&
            authentication.role === "ROLE_ADMIN" && (
              <StageCardAdminControls stage={stage} />
            )}
        </IonCardContent>
        <IonRow className="socialStage" color="red">
          <IonIcon icon={peopleOutline} className="IconStage">
            {" "}
          </IonIcon>
          <IonLabel className="stagetabs">{stage.capacity}</IonLabel>
          <IonIcon icon={cashOutline} className="IconStage"></IonIcon>
          <IonLabel className="stagetabs" id="stagetabsSponsor">
            {stage.sponsor}
          </IonLabel>
          <IonIcon icon={locationOutline} className="IconStage"></IonIcon>{" "}
          <IonLabel className="stagetabsLocation">{stage.location}</IonLabel>
        </IonRow>
      </IonCard>
    </>
  );
};

export default StageCard;
