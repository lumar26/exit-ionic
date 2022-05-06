import React, {createContext, useContext, useState} from "react";
import axios from "axios";
import {useAuthentication} from "./AuthenticationContext";
import Event from "../model/Event";

const apiUrl = "http://localhost:8000/api/events"

type EventsContextType = {
    events: Array<Event>;
    addEvent: ((event: Event) => void);
    deleteEvent: ((event: Event) => void)
    updateEvent: ((event: Event, id: number) => void)
    getAllEvents: () => void
}

type PostEventPayload = {
    id: number;
    image: string;
    start: string;
    name: string;
    stage_id: number;
    user_id: number
}

const toPostEventPayload = (event: Event) => {
    let postEventPayload: PostEventPayload = {
        id: event.id,
        image: event.image,
        start: event.start,
        name: event.name,
        stage_id: event.stage.id,
        user_id: event.user_id,
    }
    return postEventPayload;
}

const EventsContext = createContext<EventsContextType>({
        events: [],
        addEvent: () => {
        },
        updateEvent: () => {
        },
        deleteEvent: () => {
        },
        getAllEvents: () => {},
    }
);

export const useEvents = () => {
    return useContext(EventsContext)
}

export const EventsProvider: React.FC = (props) => {
    const authentication = useAuthentication();

    const [events, setEvents] = useState<Array<Event>>();

    const getAllEvents = () => {
        console.log('Getting all events in eventsCtx')

        axios.get<Array<Event>>(apiUrl)
            .then((response) => {
                console.log('Recieved events from server: ')
                console.log(response.data)
                setEvents(response.data);
            })
            .catch(error => {
                console.log(error);
                setEvents([])
            });
    };

    const addEvent = (event: Event) => {
        console.log('addEvent: ' + event)
        axios
            .post<Event>(apiUrl, toPostEventPayload(event), {
                headers: {
                    'Authorization': authentication.tokenType + " " + authentication.accessToken
                }
            })
            .then((response) => {
                events!.push(response.data)
                setEvents(events)
            })
            .catch((e) => {
                console.log(e);
            });
    }

    const updateEvent = (event: Event, id: number) => {
        axios
            .put<Event>(`${apiUrl}/${id}`, toPostEventPayload(event), {
                headers: {
                    'Authorization': authentication.tokenType + " " + authentication.accessToken
                }
            })
            .then((response) => {
                console.log('Updated event: ' + response.data);
                let oldEvent = events?.find(event => event.id === id)
                if (!oldEvent) {
                    events?.push(response.data)
                } else {
                    // updating fields manually
                }
                setEvents(events)
            })
            .catch((e) => {
                console.log(e);
            });
    }

    const deleteEvent = (event: Event) => {
        axios
            .delete<Event>(`${apiUrl}/${event.id}`, {
                headers: {
                    'Authorization': authentication.tokenType + " " + authentication.accessToken
                }
            })
            .then((response) => {
                console.log(response.data);
                setEvents(events?.filter(event => event.id !== response.data.id))
            })
            .catch((e) => {
                console.log(e);
            });
    };

    const context: EventsContextType = {
        events: events!,
        getAllEvents: getAllEvents,
        addEvent: addEvent,
        deleteEvent: deleteEvent,
        updateEvent: updateEvent,
    }

    return <EventsContext.Provider value={context}>
        {props.children}
    </EventsContext.Provider>
}

