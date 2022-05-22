import React from "react";
import {IonButton, IonCard, IonCardContent, IonCardHeader, IonIcon, IonItem, IonLabel, IonList} from "@ionic/react";
import {cartOutline, removeCircleOutline} from "ionicons/icons";
import {useTickets} from "../../store/TicketsContext";
import Ticket from "../../model/Ticket";

const CartCard: React.FC = () => {
    const ticketsContext = useTickets();
    function removeFromCart(ticket: Ticket) {
        ticketsContext.removeFromCart(ticket);
    }
    function getTotal() {
        let i;
        let total = 0;
        for (i = 0; i < ticketsContext.tickets.length; i++) {
            total += ticketsContext.tickets[i].price - (ticketsContext.tickets[i].price * ticketsContext.tickets[i].discount) / 100;
        }
        return total;
    }

    const buyTickets = () => {
        ticketsContext.saveTickets(ticketsContext.tickets);
    };

    return (
        <IonCard>
            <IonItem color="red">
                <IonIcon icon={cartOutline} slot="start" />
                <IonLabel>Added to cart</IonLabel>
                <IonLabel slot="end">Total: {getTotal()}</IonLabel>
            </IonItem>

            <IonCardContent>
                <IonList>
                    {ticketsContext.tickets &&
                        ticketsContext.tickets.map((ticket) => (
                                <IonItem key={ticket.id}>
                                    {ticket.title}
                                    <IonButton onClick={() => removeFromCart(ticket)}>
                                        <IonIcon
                                            icon={removeCircleOutline}
                                            slot="end"
                                            color="red"
                                        ></IonIcon>
                                    </IonButton>
                                </IonItem>
                        ))}
                </IonList>
            </IonCardContent>
            <IonCardHeader>
                <IonButton expand={'block'} onClick={buyTickets}>
                    Buy selected tickets
                </IonButton>
            </IonCardHeader>
        </IonCard>
    )
}
export default CartCard