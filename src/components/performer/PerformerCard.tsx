import React from "react";
<<<<<<< Updated upstream
import {IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonImg, IonItem, IonLabel} from "@ionic/react";
=======
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonImg,
  IonItem,
  IonText,
  IonList,
  IonButton,
  IonIcon,
  IonGrid,
  IonRow,
  IonHeader,
  IonTitle,
  IonLabel,
  IonCol,
} from "@ionic/react";
>>>>>>> Stashed changes
import Performer from "../../model/Performer";
import {
  logoFacebook,
  logoInstagram,
  logoTwitter,
  musicalNoteOutline,
} from "ionicons/icons";

const PerformerCard: React.FC<{
<<<<<<< Updated upstream
    performer: Performer
}> = ({performer}) => {
    return (
        <IonCard>
            <IonCardContent>
                <IonImg src={performer.img}/>
                <IonCardHeader>
                    <IonCardTitle>{performer.nick}</IonCardTitle>
                    <IonCardContent>
                        <IonItem>{performer.name} {performer.surname}</IonItem>
                        <IonItem>Genre: {performer.music_genre}</IonItem>
                    </IonCardContent>
                </IonCardHeader>
            </IonCardContent>
        </IonCard>
    );
}
=======
  performer: Performer;
}> = ({ performer }) => {
  return (
    <>
      <IonCard className="performerCard">
        <IonCardHeader className="picture">
          <IonImg src={performer.image} className="img"></IonImg>
        </IonCardHeader>
        <IonCardContent className="performerContent">
          <IonLabel className="performerName" color="grey">
            {performer.name} {performer.surname}
          </IonLabel>
          <br />
          <IonLabel className="perforemerNick" slot="end">
            {performer.nick}
          </IonLabel>
          <br />
          <IonLabel className="PerformerGenre">
            Genre: {performer.music_genre}
          </IonLabel>
        </IonCardContent>
        <IonRow className="social" color="red">
          <IonCol>
            <IonIcon icon={logoFacebook} className="socialIcon"></IonIcon>
          </IonCol>
          <IonCol className="socialIcon">
            <IonIcon icon={logoInstagram} className="socialIcon"></IonIcon>
          </IonCol>
          <IonCol>
            <IonIcon icon={logoTwitter} className="socialIcon"></IonIcon>
          </IonCol>
        </IonRow>
      </IonCard>
    </>
  );
};
>>>>>>> Stashed changes

export default PerformerCard;
