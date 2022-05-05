import {useEvents} from "../../store/EventsContext";
import {IonImg} from "@ionic/react";
import EventList from "./EventList";
import React, {useEffect} from "react";
import {useAuthentication} from "../../store/AuthenticationContext";
import AddEventModal from "./admin/AddEventModal";

const EventsPageContent = () => {
    const eventsContext = useEvents();
    const authentication = useAuthentication();

    useEffect(() => {
        eventsContext.getAllEvents();
    }, []);
    return (
        <>
            {authentication.authenticatedUser
                && authentication.authenticatedUser.role === 'admin'
                && <AddEventModal/>}
            <IonImg src={"/images/events.jpeg"} className="img"></IonImg>
            <EventList events={eventsContext.events} />
        </>

);
}

export default EventsPageContent;