import {useEvents} from "../../store/EventsContext";
import {IonImg} from "@ionic/react";
import EventList from "./EventList";
import React, {useEffect} from "react";
import {useAuthentication} from "../../store/AuthenticationContext";
import AddEventButton from "./admin/AddEventButton";
import {useComments} from "../../store/CommentsContext";
import {useError} from "../../store/ErrorContext";
import ErrorNotification from "../error/ErrorNotification";

const EventsPageContent = () => {
    const eventsContext = useEvents();
    const commentsContext = useComments();
    const authentication = useAuthentication();

    const {error} = useError()

    useEffect(() => {
        eventsContext.getAllEvents();
        commentsContext.getAllComments();
    }, []);

    return (
        <>
            {error && <ErrorNotification />}
            <IonImg src={"/images/events.jpeg"} className="img"></IonImg>
            {authentication.authenticatedUser
                && authentication.role === 'ROLE_ADMIN'
                && <AddEventButton/>}
            <EventList events={eventsContext.events} />
        </>

);
}

export default EventsPageContent;