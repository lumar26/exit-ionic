import React from "react";
import {IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonImg, IonItem} from "@ionic/react";
import Stage from "../../model/Stage";

const StageCard: React.FC<{
    stage: Stage
}> = ({stage}) => {
    return (
        <IonCard>
            <IonCardContent>
                <IonImg src={stage.img}/>
                <IonCardHeader>
                    <IonCardTitle>{stage.name}</IonCardTitle>
                    <IonCardContent>
                        <IonItem>Capacity: {stage.capacity}</IonItem>
                        <IonItem>Sponsor: {stage.sponsor}</IonItem>
                        <IonItem>Location: {stage.location}</IonItem>
                    </IonCardContent>
                </IonCardHeader>
            </IonCardContent>
        </IonCard>
    );
}

export default StageCard;