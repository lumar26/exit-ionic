import React from "react";
import {
  IonPage,
  IonHeader,
  IonContent,
  IonToolbar,
  IonButton,
  IonButtons,
} from "@ionic/react";
import NavBar from "../components/navigation/NavBar";
import Performers from "../components/performer/AdminPerformerTable";
import Stages from "../components/stage/AdminStageTable";

const Administartor: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <NavBar />
      </IonHeader>
      <IonContent>
        <Performers></Performers>
        <Stages></Stages>
      </IonContent>
    </IonPage>
  );
};

export default Administartor;
