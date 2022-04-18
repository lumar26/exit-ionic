import React from "react";
import {IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonImg} from "@ionic/react";

const StageCard: React.FC = () => {
    return (
        <IonCard>
            <IonCardContent>
                <IonImg src="/images/stages/no-sleep.jpg"/>
                <IonCardHeader>
                    <IonCardTitle>No sleep stage</IonCardTitle>
                    <IonCardContent>
                        Description
                    </IonCardContent>
                </IonCardHeader>
            </IonCardContent>
        </IonCard>
    );
}

export default StageCard;