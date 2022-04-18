import React from "react";
import {IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonImg} from "@ionic/react";

const PerformerCard: React.FC = () => {
    return (
        <IonCard>
            <IonCardContent>
                <IonImg src="/images/performers/meduza.jpg"/>
                <IonCardHeader>
                    <IonCardTitle>Meduza</IonCardTitle>
                    <IonCardContent>
                        Info
                    </IonCardContent>
                </IonCardHeader>
            </IonCardContent>
        </IonCard>
    );
}

export default PerformerCard;