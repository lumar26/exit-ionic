import {IonContent, IonHeader, IonPage} from '@ionic/react';
import React from "react";

const eventsUrl = "http://localhost:8000/api/events";

const Home: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
            </IonHeader>
            <IonContent fullscreen>
            </IonContent>
        </IonPage>
    );
};

export default Home;
