import {IonContent, IonHeader, IonPage} from '@ionic/react';
import React from "react";
import NavBar from "../components/navigation/NavBar";


const Home: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
             <NavBar/>
            </IonHeader>
            <IonContent fullscreen>
            </IonContent>
           
        </IonPage>
    );
};

export default Home;
