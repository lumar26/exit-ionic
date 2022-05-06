import React, { useState } from "react";
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonIcon,
  IonImg,
  IonLabel,
  IonModal,
  IonRow,
  IonText,
  useIonAlert,
} from "@ionic/react";
import Event from "../../model/Event";
import {
  closeCircleOutline,
  locationOutline,
  peopleOutline,
} from "ionicons/icons";
import StageCard from "../stage/StageCard";
import PerformerList from "../performer/PerformerList";

const EventCard: React.FC<{
  event: Event;
}> = ({ event }) => {
  const stage = event.stage;
  const performers = event.performers;
  const [showModalStage, setShowModalStage] = useState(false);
  const [showModalPerformers, setShowModalPerformers] = useState(false);
  const [alert] = useIonAlert();

  return (
    <>
      <IonCard className="stageCard">
        <IonCardHeader className="picture">
          <IonImg src={event.image} className="img"></IonImg>
        </IonCardHeader>
        <IonCardContent className="stageContent">
          <br />
          <IonLabel className="eventName" color="grey">
            {event.name}
          </IonLabel>
          <IonLabel className="eventStart" color="grey">
            <b>Starts:</b> {event.start.substring(0, event.start.indexOf("T"))}
          </IonLabel>
        </IonCardContent>
        <IonRow className="social" color="red" id="eventFooter">
          <IonModal isOpen={showModalPerformers}>
            <IonButton
              color="white"
              size="large"
              className="buttonCloseModal"
              slot="end"
              onClick={() => {
                setShowModalPerformers(false);
              }}
            >
              <IonIcon icon={closeCircleOutline} slot="end" color="grey" />
            </IonButton>
            <PerformerList performers={event.performers} />
          </IonModal>
          <IonButton
            onClick={() => {
              if (performers[0] == null) {
                setShowModalPerformers(false);
                alert({
                  cssClass: "styles",
                  header: "Alert",
                  message: "No performers added",
                  buttons: [
                    "Cancel",
                    { text: "Ok", handler: (d) => console.log("ok pressed") },
                  ],
                  onDidDismiss: (e) => console.log("did dismiss"),
                });
              } else setShowModalPerformers(true);
            }}
            color="grey"
          >
            <IonIcon icon={peopleOutline} className="iconMenu"></IonIcon>
            <IonText className="eventtabs">Performers</IonText>
          </IonButton>

          <IonModal isOpen={showModalStage}>
            <IonButton
              color="white"
              size="large"
              className="buttonCloseModal"
              onClick={() => {
                setShowModalStage(false);
              }}
            >
              <IonIcon icon={closeCircleOutline} slot="end" color="grey" />
            </IonButton>
            <StageCard stage={stage} />
          </IonModal>
          <IonButton onClick={() => setShowModalStage(true)} color="grey">
            <IonIcon icon={locationOutline} className="iconMenu"></IonIcon>
            <IonText className="eventtabs">{stage.name}</IonText>
          </IonButton>
        </IonRow>
      </IonCard>
    </>
  );
};

export default EventCard;
