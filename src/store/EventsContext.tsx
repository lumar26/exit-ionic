import React, {createContext, useContext, useState} from "react";
import {useAuthentication} from "./AuthenticationContext";
import Event from "../model/Event";
import {addEventApi, deleteEventApi, getAllEventsApi, getEventByIdApi, updateEventApi} from "../api/eventsApi";

type EventsContextType = {
    events: Array<Event>;
    addEvent: ((event: Event) => void);
    deleteEvent: ((event: Event) => void)
    updateEvent: ((event: Event, id: number) => void)
    getAllEvents: () => void
    getEventById: (id: number, authorizationHeader: string) => void
}


const EventsContext = createContext<EventsContextType>({
        events: [],
        addEvent: () => {
        },
        updateEvent: () => {
        },
        deleteEvent: () => {
        },
        getAllEvents: () => {
        },
        getEventById: () => {
        }
    }
);

export const useEvents = () => {
    return useContext(EventsContext)
}

export const EventsProvider: React.FC = (props) => {
    const authentication = useAuthentication();
    const authorizationHeader = authentication.tokenType + " " + authentication.accessToken

    const [events, setEvents] = useState<Array<Event>>();

    const getAllEvents = () => {
        getAllEventsApi().then(retrievedEvents =>{
            if (!retrievedEvents){
                console.log("Could not retrieve all events")
                setEvents([]);
                return;
            }
            console.log("retrieved events in context")
            console.log(retrievedEvents)
            setEvents(retrievedEvents)
        })
    };

    const addEvent = (event: Event) => {
        addEventApi(event, authorizationHeader).then(added => {
            if (!added) {
                console.log("Failed to add new member with name: " + event.name)
                return;
            }
            events!.push(added)
            setEvents(events)
        })
    }

    const updateEvent = (event: Event, id: number) => {

        updateEventApi(event, id, authorizationHeader).then(updated => {
            if (!updated) {
                console.log("Failed to update member with id: " + event.id)
                return;
            } // handle if update did not work

            let oldEvent = events?.find(event => event.id === id)
            if (!oldEvent) {
                events?.push(updated)
            } else {
                // updating fields manually
                //    izgleda da ne mora uopste
            }
            setEvents(events)
        })

    }

    const deleteEvent = (event: Event) => {
        deleteEventApi(event, authorizationHeader)
            .then(deleted => {
                if (deleted)
                    setEvents(events?.filter(event => event.id !== deleted.id))
            })
    };

    const context: EventsContextType = {
        events: events!,
        getAllEvents: getAllEvents,
        addEvent: addEvent,
        deleteEvent: deleteEvent,
        updateEvent: updateEvent,
        getEventById: getEventByIdApi
    }

    return <EventsContext.Provider value={context}>
        {props.children}
    </EventsContext.Provider>
}

