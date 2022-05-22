import {useEvents} from "../../store/EventsContext";
import {IonImg} from "@ionic/react";
import EventList from "./EventList";
import React, {useEffect} from "react";
import {useAuthentication} from "../../store/AuthenticationContext";
import AddEventButton from "./admin/AddEventButton";
import {useComments} from "../../store/CommentsContext";

const EventsPageContent = () => {
    const eventsContext = useEvents();
    const commentsContext = useComments();
    const authentication = useAuthentication();

    useEffect(() => {
        eventsContext.getAllEvents();
        commentsContext.getAllComments();
    }, []);

    return (
        <>
            <IonImg src={"/images/events.jpeg"} className="img"></IonImg>
            {authentication.authenticatedUser
                && authentication.role === 'ROLE_ADMIN'
                && <AddEventButton/>}
            <EventList events={eventsContext.events} />
        </>

);
}

export default EventsPageContent;