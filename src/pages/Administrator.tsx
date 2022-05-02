import React from "react";
import {IonContent, IonHeader, IonPage,} from "@ionic/react";
import NavBar from "../components/navigation/NavBar";
import PerformersTable from "../components/performer/admin/PerformersTable";

const Administrator: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <NavBar />
      </IonHeader>
      <IonContent>
              <PerformersTable />
      </IonContent>
    </IonPage>
  );
};

export default Administrator;
