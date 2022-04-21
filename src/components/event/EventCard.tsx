import React from "react";
import {IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonImg} from "@ionic/react";
import Event from "../../model/Event";

const EventCard: React.FC<{
    event: Event
}> = ({event}) => {
    const date = new Date(event.start);
    return (
        <IonCard>
            <IonCardContent>
                <IonImg src={event.image}/>
                <IonCardHeader>
                    <IonCardSubtitle>{event.stage.name}</IonCardSubtitle>
                    <IonCardTitle>{event.name}</IonCardTitle>
                    <IonCardContent>
                        {date.toString()}
                    </IonCardContent>
                </IonCardHeader>
            </IonCardContent>
        </IonCard>
    );
}

export default EventCard;