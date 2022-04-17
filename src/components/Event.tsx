import React from "react";
import {IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonImg} from "@ionic/react";

const Event: React.FC = () => {
    return (
        <IonCard>
            <IonCardContent>
                <IonImg src="/images/performers/brejcha.jpg"/>
                <IonCardHeader>
                    <IonCardSubtitle>Stage 1</IonCardSubtitle>
                    <IonCardSubtitle>Performers</IonCardSubtitle>
                    <IonCardTitle>Boris Brejcha</IonCardTitle>
                    <IonCardContent>
                        Date
                    </IonCardContent>
                </IonCardHeader>
            </IonCardContent>
        </IonCard>
    );
}

export default Event;