import {IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from '@ionic/react';
import Event from "../components/Event";
import React from "react";
import Stage from "../components/Stage";
import Performer from "../components/Performer";

const Home: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Exit festival</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <Event/>
                <Stage/>
                <Performer/>
            </IonContent>
        </IonPage>
    );
};

export default Home;
