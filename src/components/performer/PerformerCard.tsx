import React from "react";
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCol,
  IonIcon,
  IonImg,
  IonLabel,
  IonRow,
} from "@ionic/react";
import Performer from "../../model/Performer";
import { logoFacebook, logoInstagram, logoTwitter } from "ionicons/icons";
import { useAuthentication } from "../../store/AuthenticationContext";
import PerformerCardAdminControls from "./admin/PerformerCardAdminControls";

const PerformerCard: React.FC<{
  performer: Performer;
}> = ({ performer }) => {
  const authentication = useAuthentication();

  return (
    <IonCard className="performerCard">
      <IonCardHeader className="picture">
        <IonImg src={performer.image} className="img"></IonImg>
      </IonCardHeader>
      <IonCardContent className="performerContent">
        <IonLabel className="performerNick" color="grey">
          {performer.nick}
        </IonLabel>
        <br />
        <IonLabel className="performerName" slot="end">
          {performer.name} {performer.surname}
        </IonLabel>
        <br />
        <IonLabel>Genre: {performer.genre}</IonLabel>

        {authentication.authenticatedUser &&
          authentication.role === "ROLE_ADMIN" && (
            <PerformerCardAdminControls performer={performer} />
          )}
      </IonCardContent>
      <IonRow className="social" color="red">
        <IonCol>
          <a href="https://facebook.com/">
            <IonIcon icon={logoFacebook} className="socialIcon"></IonIcon>
          </a>
        </IonCol>
        <IonCol>
          <a href="https://instagram.com/">
            <IonIcon icon={logoInstagram} className="socialIcon"></IonIcon>
          </a>
        </IonCol>

        <IonCol>
          <a href="https://twitter.com/">
            <IonIcon icon={logoTwitter} className="socialIcon"></IonIcon>
          </a>
        </IonCol>
      </IonRow>
    </IonCard>
  );
};

export default PerformerCard;
