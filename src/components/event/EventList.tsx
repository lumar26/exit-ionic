import React from "react";
import {IonList} from "@ionic/react";
import Event from "../../model/Event";
import EventCard from "./EventCard";

const EventList: React.FC<{
    events: Array<Event>,
}> = ({events}) => {
    if (!events) console.log("invalid events passed to events list: " + events);
    return (
        <IonList>
            {events.map(event => <EventCard key={event.id} event={event}/>)}
        </IonList>
    );
}
export default EventList;