import axios from "axios";
import Ticket from "../model/Ticket";

const apiUrl = "http://localhost:8080/api/tickets"

export const getTicketsForUserApi = (userId: number, requestConfig: any) => {
    return axios.get<Array<Ticket>>(`${apiUrl}/user/${userId}`, requestConfig).then(response => {
        if (response.status !== 200)
            throw new Error("Could not fetch tickets of user with id: " + userId);
        return response.data
    }).catch(error => {
        throw error;
    })
}

export const getAllTicketsApi = (requestConfig: any) => {
    return axios.get<Array<Ticket>>(apiUrl, requestConfig)
        .then((response) => {
            return response.data;
        })
        .catch(error => {
            throw error;
        });
};

export const addTicketApi = (ticket: Ticket, requestConfig: any) => {
    return axios
        .post<Ticket>(apiUrl, (ticket), requestConfig)
        .then((response) => {
            if (response.status !== 200)
                throw new Error("Could not add new ticket: " + response.data);
            return response.data;
        })
        .catch((e) => {
            console.log(e);
        });
}



