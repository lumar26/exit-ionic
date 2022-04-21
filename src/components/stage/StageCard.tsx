import React from "react";
import {IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonImg, IonItem} from "@ionic/react";
import Stage from "../../model/Stage";

const StageCard: React.FC<{
    stage: Stage
}> = ({stage}) => {
    return (
        <IonCard>
            <IonCardContent>
                <IonImg src={stage.image}/>
                <IonCardHeader>
                    <IonCardTitle>{stage.name}</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                    <IonItem>Capacity: {stage.capacity}</IonItem>
                    <IonItem>Sponsor: {stage.sponsor}</IonItem>
                    <IonItem>Location: {stage.location}</IonItem>
                </IonCardContent>
            </IonCardContent>
        </IonCard>
    );
}

export default StageCard;