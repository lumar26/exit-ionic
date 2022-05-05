import {useEvents} from "../../store/EventsContext";
import {IonImg} from "@ionic/react";
import EventList from "./EventList";
import React, {useEffect} from "react";

const EventsPageContent = () => {
    const eventsContext = useEvents();

    useEffect(() => {
        eventsContext.getAllEvents();
    }, []);
    return (
        <>
            <IonImg src={"/images/events.jpeg"} className="img"></IonImg>
            <EventList events={eventsContext.events} />
        </>

);
}

export default EventsPageContent;