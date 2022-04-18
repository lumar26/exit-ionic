import React from "react";
import {IonList} from "@ionic/react";
import Event from "../../model/Event";
import EventCard from "./EventCard";

const EventList: React.FC<{
    events: Array<Event>,
}> = ({events}) => {
    console.log(events.length)
    console.log(events)
    return (
        <IonList>
            {events.map(event => <EventCard key={event.id} event={event}/>)}
        </IonList>
    );
}
export default EventList;