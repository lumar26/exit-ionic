import {
  IonMenu,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonMenuToggle,
  IonItem,
  IonLabel,
  IonIcon,
} from "@ionic/react";
import {
  personCircleOutline,
  homeOutline,
  globeOutline,
  playCircleOutline,
  ticketOutline,
  chevronForwardCircle,
  chevronForwardOutline,
  recordingOutline,
} from "ionicons/icons";
import React from "react";

const Menu: React.FC = () => {
  return (
    <IonMenu side="end" contentId="main">
      <IonHeader>
        <IonToolbar color="red">
          <IonTitle>MENU</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonMenuToggle auto-hide="false">
            <IonItem button routerLink={"/home"} routerDirection="none">
              <IonIcon
                icon={homeOutline}
                className="iconMenu"
                slot="start"
              ></IonIcon>
              <IonLabel>Home</IonLabel>
            </IonItem>
          </IonMenuToggle>
          <IonMenuToggle auto-hide="false">
            <IonItem button routerLink={"/registration"} routerDirection="none">
              <IonIcon
                icon={personCircleOutline}
                className="iconMenu"
                slot="start"
              ></IonIcon>
              <IonLabel>Registration</IonLabel>
            </IonItem>
          </IonMenuToggle>
          <IonMenuToggle auto-hide="false">
            <IonItem button routerLink={"/performers"} routerDirection="none">
              <IonIcon
                icon={globeOutline}
                className="iconMenu"
                slot="start"
              ></IonIcon>
              <IonLabel>Performers</IonLabel>
            </IonItem>
          </IonMenuToggle>

          <IonMenuToggle auto-hide="false">
            <IonItem button routerLink={"/stages"} routerDirection="none">
              <IonIcon
                icon={playCircleOutline}
                className="iconMenu"
                slot="start"
              ></IonIcon>
              <IonLabel>Stages</IonLabel>
            </IonItem>
          </IonMenuToggle>
          <IonMenuToggle auto-hide="false">
            <IonItem button routerLink={"/tickets"} routerDirection="none">
              <IonIcon
                icon={ticketOutline}
                className="iconMenu"
                slot="start"
              ></IonIcon>
              <IonLabel>Tickets</IonLabel>
            </IonItem>
          </IonMenuToggle>
          <IonMenuToggle auto-hide="false">
            <IonItem button routerLink={"/contact"} routerDirection="none">
              <IonIcon
                icon={recordingOutline}
                className="iconMenu"
                slot="start"
              ></IonIcon>
              <IonLabel>Contact</IonLabel>
            </IonItem>
          </IonMenuToggle>
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
