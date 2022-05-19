import axios from "axios";
import Event from "../model/Event";

const apiUrl = "http://localhost:8080/api/events"

export const getEventByIdApi = (id: number, requestConfig: any) => {
    return axios.get<Event>(`${apiUrl}/${id}`, requestConfig).then(response => {
        if (response.status !== 200)
            throw new Error("Could not fetch event with id: " + id);
        return response.data
    }).catch(error => {
        throw error;
    })
}

export const getAllEventsApi = (requestConfig: any) => {
    console.log("Getting all events api")
    return axios.get<Array<Event>>(apiUrl, requestConfig)
        .then((response) => {
            console.log(response.data)
            return response.data;
        })
        .catch(error => {
            throw error;
        });
};

export const addEventApi = (event: Event, requestConfig: any) => {
    console.log('addEvent: ' + event)
    return axios
        .post<Event>(apiUrl, toPostEventPayload(event), requestConfig)
        .then((response) => {
            if (response.status !== 200)
                throw new Error("Could not add new event: " + response.data);
            return response.data;
        })
        .catch((e) => {
            console.log(e);
        });
}

export const updateEventApi = (event: Event, id: number, requestConfig: any) => {
    console.log("Updating event in api")
    console.log(event)
    return axios
        .put<Event>(`${apiUrl}/${id}`, toPostEventPayload(event), requestConfig)
        .then((response) => {
            return response.data;
        })
        .catch((e) => {
            console.log(e);
        });
}

export const deleteEventApi = (event: Event, requestConfig: any) => {
    return axios
        .delete<Event>(`${apiUrl}/${event.id}`, requestConfig)
        .then((response) => {
            return response.data;
        })
        .catch((e) => {
            console.log(e);
        });
};

type PostEventPayload = {
    id: number;
    image: string;
    start: string;
    name: string;
    stageId: number;
    userId: number;
    performersIds: Array<number>
}

const toPostEventPayload = (event: Event) => {
    let postEventPayload: PostEventPayload = {
        id: event.id,
        image: event.image,
        start: event.start,
        name: event.name,
        stageId: event.stage?.id,
        userId: event.user_id,
        performersIds: event.performers.map(performer => performer.id)
    }
    return postEventPayload;
}
