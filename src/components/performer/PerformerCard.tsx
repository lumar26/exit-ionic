import React from "react";
import {IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonImg, IonItem} from "@ionic/react";
import Performer from "../../model/Performer";

const PerformerCard: React.FC<{
    performer: Performer
}> = ({performer}) => {
    return (
        <IonCard>
            <IonCardContent>
                <IonImg src={performer.image}/>
                <IonCardHeader>
                    <IonCardTitle>{performer.nick}</IonCardTitle>
                    <IonCardContent>
                        <IonItem>{performer.name} {performer.surname}</IonItem>
                        <IonItem>Genre: {performer.music_genre}</IonItem>
                    </IonCardContent>
                </IonCardHeader>
            </IonCardContent>
        </IonCard>
    );
}

export default PerformerCard;