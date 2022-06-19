import {useEvents} from "../../store/EventsContext";
import {IonImg, IonSearchbar} from "@ionic/react";
import EventList from "./EventList";
import React, {useEffect, useState} from "react";
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

    const [searchCondition, setSearchCondition] = useState("");

    let displayedEvents = searchCondition
        ? eventsContext.events.filter(events => events.name.includes(searchCondition) || events.stage.name.includes(searchCondition) || events.start.includes(searchCondition))
        : eventsContext.events

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
            <IonSearchbar
                value={searchCondition}
                onIonChange={e => setSearchCondition(e.detail.value!.trim())}/>
            <EventList events={displayedEvents} />
        </>

);
}

export default EventsPageContent;