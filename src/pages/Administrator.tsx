import React from "react";
import {
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
  IonPage,
  IonHeader,
  IonContent,
  IonRouterOutlet,
} from "@ionic/react";
import NavBar from "../components/navigation/NavBar";
import Performers from "../components/performer/AdminPerformerTable";

const Administartor: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <NavBar />
      </IonHeader>
      <IonContent>
        <Performers></Performers>
      </IonContent>
    </IonPage>
  );
};

export default Administartor;
