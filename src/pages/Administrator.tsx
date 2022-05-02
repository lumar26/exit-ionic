import React from "react";
import PerformersTable from "../components/performer/admin/PerformersTable";
import {
    IonPage,
    IonHeader,
    IonContent,
} from "@ionic/react";
import NavBar from "../components/navigation/NavBar";
import Stages from "../components/stage/AdminStageTable";

const Administrator: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <NavBar/>
            </IonHeader>
            <IonContent>
                <PerformersTable/>
                <Stages></Stages>
            </IonContent>
        </IonPage>
    );
};

export default Administrator;
