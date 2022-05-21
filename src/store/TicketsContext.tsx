import React, {createContext, useContext, useState} from "react";
import Ticket from "../model/Ticket";
import User from "../model/User";
import {useAuthentication} from "./AuthenticationContext";
import {addTicketApi, getAllTicketsApi, getTicketsForUserApi} from "../api/ticketsApi";

const availableTickets: Array<Ticket> = [
    {
        id: 1,
        title: "Regular 4-Day Ticket",
        image: "/images/tickets/4.png",
        price: 119,
        discount: 0,
        purchaseDate: new Date(),
        stage: undefined,
        owner: undefined,
        description:
            "This is a general admission pass, giving you 4 nights of EXIT Festival in the beautiful scenery of the Petrovaradin Fortress.",
    },
    {
        id: 2,
        title: "4-Day Ticket (5 for 4)",
        image: "/images/tickets/4.png",
        price: 95,
        discount: 0,
        purchaseDate: new Date(),
        stage: undefined,
        owner: undefined,
        description:
            "This is a general admission pass, giving you 4 nights of EXIT Festival in the beautiful scenery of the Petrovaradin Fortress.",
    },
    {
        id: 3,
        title: "VIP GOLD 4-Day Ticket",
        image: "/images/tickets/4gold.png",
        price: 300,
        discount: 0,
        purchaseDate: new Date(),
        stage: undefined,
        owner: undefined,
        description:
            "This is a VIP pass, giving you 4 nights of EXIT Festival in the beautiful scenery of the Petrovaradin Fortress and special access to our VIP facilities.",
    },
    {
        id: 4,
        title: "Regular 2-Day Ticket",
        image: "/images/tickets/1.png",
        price: 34,
        discount: 0,
        purchaseDate: new Date(),
        stage: undefined,
        owner: undefined,
        description:
            "This is a general admission day ticket, giving you 1 entry on 1 night of EXIT Festival in the beautiful scenery of the Petrovaradin Fortress, including the headline concert of Nick Cave and The Bad Seeds.",
    },
    {
        id: 5,
        title: "VIP GOLD Day 2 Ticket",
        image: "/images/tickets/1gold.png",
        price: 100,
        discount: 0,
        purchaseDate: new Date(),
        stage: undefined,
        owner: undefined,
        description:
            "This is a VIP day ticket, giving you 1 entry on 1 night of EXIT Festival in the beautiful scenery of the Petrovaradin Fortress, including the headline concert of Nick Cave and The Bad Seeds, with special access to our VIP facilities.",
    },
];

const TicketContext = createContext<TicketContextType>({
    tickets: [],
    availableTickets: availableTickets,
    addToCart: (ticket: Ticket) => {
    },
    saveTickets: (ticket: Ticket) => {
    },
    removeFromCart: (ticket: Ticket) => {
    },
    getAllTickets: () => {
    },
    getAllTicketsOfUser: (userId: number) => {
    }
})

export const useTickets = () => {
    return useContext(TicketContext);
}

type TicketContextType = {
    tickets: Array<Ticket>,
    availableTickets: Array<Ticket>,
    addToCart: (ticket: Ticket) => void
    removeFromCart: (ticket: Ticket) => void
    saveTickets: (ticket: Ticket) => void
    getAllTickets: () => void
    getAllTicketsOfUser: (userId: number) => void
}

export const TicketsProvider: React.FC = (props) => {
    const authentication = useAuthentication();
    const requestConfig: any = {
        headers: {
            'Authorization': authentication.accessToken as string
        }
    }
    const [tickets, setTickets] = useState<Array<Ticket>>([]);

    const addNewTicket =  (ticket:Ticket) => {
        addTicketApi(ticket, requestConfig)
            .then(savedTicket => {
                if (savedTicket)
                    tickets.push(savedTicket)
            }).catch(error => console.log(error))
    }

    const getAllTickets = () => {
        getAllTicketsApi(requestConfig)
            .then(tickets => {
                if (tickets)
                    setTickets(tickets);
            })
            .catch(error => console.log(error))
    }

    const getAllTicketsOfUser = (userId: number) => {
        getTicketsForUserApi(userId, requestConfig)
            .then(tickets => {
                if (tickets)
                    setTickets(tickets)
            })
            .catch(error => console.log(error))
    }

    const addToCart = (ticket: Ticket) => {
        setTickets(tickets.concat(ticket));
    }

    const removeFromCart = (ticket: Ticket) => {
        setTickets(tickets.splice(tickets.indexOf(ticket), 1));
    }

    const context: TicketContextType = {
        tickets: tickets,
        availableTickets: availableTickets,
        addToCart: addToCart,
        removeFromCart: removeFromCart,
        saveTickets: addNewTicket,
        getAllTickets: getAllTickets,
        getAllTicketsOfUser: getAllTicketsOfUser
    }

    return <TicketContext.Provider value={context}>
        {props.children}
    </TicketContext.Provider>
}

export default TicketsProvider;