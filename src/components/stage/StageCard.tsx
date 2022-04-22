import React from "react";
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonImg,
  IonItem,
  IonRow,
  IonCol,
  IonLabel,
  IonIcon,
} from "@ionic/react";
import Stage from "../../model/Stage";
import { locationOutline, cashOutline, peopleOutline } from "ionicons/icons";

const StageCard: React.FC<{
<<<<<<< Updated upstream
    stage: Stage
}> = ({stage}) => {
    return (
        <IonCard>
            <IonCardContent>
                <IonImg src={stage.img}/>
                <IonCardHeader>
                    <IonCardTitle>{stage.name}</IonCardTitle>
                    <IonCardContent>
                        <IonItem>Capacity: {stage.capacity}</IonItem>
                        <IonItem>Sponsor: {stage.sponsor}</IonItem>
                        <IonItem>Location: {stage.location}</IonItem>
                    </IonCardContent>
                </IonCardHeader>
            </IonCardContent>
        </IonCard>
    );
}
=======
  stage: Stage;
}> = ({ stage }) => {
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
        </IonCardContent>
        <IonRow className="social" color="red">
          <IonIcon icon={peopleOutline} className="socialIcon">
            {" "}
          </IonIcon>
          <IonLabel className="stagetabs">{stage.capacity}</IonLabel>
          <IonIcon icon={cashOutline} className="socialIcon"></IonIcon>
          <IonLabel className="stagetabs">{stage.sponsor}</IonLabel>
          <IonIcon icon={locationOutline} className="socialIcon"></IonIcon>{" "}
          <IonLabel className="stagetabs">{stage.location}</IonLabel>
        </IonRow>
      </IonCard>
    </>
  );
};
>>>>>>> Stashed changes

export default StageCard;
