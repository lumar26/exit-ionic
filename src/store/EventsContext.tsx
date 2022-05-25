import React, {createContext, useContext, useState} from "react";
import {useAuthentication} from "./AuthenticationContext";
import Event from "../model/Event";
import {addEventApi, deleteEventApi, getAllEventsApi, getEventByIdApi, updateEventApi} from "../api/eventsApi";
import {StagesProvider} from "./StagesContext";
import {PerformersProvider} from "./PerformersContext";
import {getAllPerformersByEventApi} from "../api/performersApi";

type EventsContextType = {
    events: Array<Event>;
    addEvent: (event: Event) => Promise<void> | null;
    deleteEvent: (event: Event) => Promise<void> | null
    updateEvent: (event: Event, id: number) => Promise<void> | null
    getAllEvents: () => void
    getEventById: (id: number, authorizationHeader: string) => void
}


const EventsContext = createContext<EventsContextType>({
        events: [],
        addEvent: () => null,
        updateEvent: () => null,
        deleteEvent: () => null,
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
    const requestConfig: any = {
        headers: {
            'Authorization': authentication.accessToken as string
        }
    }

    const [events, setEvents] = useState<Array<Event>>();

    const getAllEvents = () => {
        getAllEventsApi(requestConfig)
            .then(retrievedEvents => {
                //setting performers for event since another separate request is needed for that
                retrievedEvents.forEach(event => {
                    getAllPerformersByEventApi(event, requestConfig)
                        .then(performers => {
                            event.performers = performers;
                        })
                })
                setEvents(retrievedEvents)
            })
            .catch(error => {
                setEvents([]);
            })
    };

    const addEvent = (event: Event): Promise<void> | null => {
        return addEventApi(event, requestConfig).then(added => {
            if (!added) {
                console.log("Failed to add new event with name: " + event.name)
                return;
            }
            setEvents(events?.concat(added));
        })
    }

    const updateEvent = (event: Event, id: number): Promise<void> | null => {
        return updateEventApi(event, id, requestConfig).then(updated => {
            let oldEvent = events?.find(event => event.id === id)
            if (!oldEvent) {
                setEvents(events?.concat(updated))
            } else {
                // updating fields manually
                //    izgleda da ne mora uopste
                // setEvents(events?.concat(updated))
            }
        })

    }

    const deleteEvent = (event: Event): Promise<void> => {
        return deleteEventApi(event, requestConfig)
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
        <StagesProvider>
            <PerformersProvider>
                {props.children}
            </PerformersProvider>
        </StagesProvider>
    </EventsContext.Provider>
}

