import React from "react";
import PerformersTable from "../components/performer/admin/PerformersTable";
import {IonContent, IonHeader, IonPage,} from "@ionic/react";
import NavBar from "../components/navigation/NavBar";
import StagesTable from "../components/stage/admin/StagesTable";

const Administrator: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <NavBar/>
            </IonHeader>
            <IonContent>
                <PerformersTable/>
                <StagesTable />
            </IonContent>
        </IonPage>
    );
};

export default Administrator;
