import {
  IonButton,
  IonCard,
  IonCardHeader,
  IonCol,
  IonGrid,
  IonImg,
  IonLabel,
  IonModal,
  IonRow,
  IonText,
  IonTitle,
} from "@ionic/react";
import { useState } from "react";
import Ticket from "../../model/Ticket";

const TicketCard: React.FC<{ ticket: Ticket }> = (ticket) => {
  function addToCart() {
    console.log("Add to cart button clicked. Ticket id: " + ticket.ticket.id);
  }
  return (
    <IonCard slot="start">
      <IonGrid>
        <IonRow>
          <IonCol size="3">
            <IonImg src={ticket.ticket.img} className="ticketImage"></IonImg>
          </IonCol>
          <IonCol size="9">
            <IonTitle id="ticketTitle">{ticket.ticket.title}</IonTitle>

            <br />
          </IonCol>
          <IonCol>
            <IonRow>
              <IonLabel color="red" id="ticketPrice">
                € {ticket.ticket.price} (+ booking free)
              </IonLabel>
            </IonRow>
            <br />
            <IonRow>
              <IonButton
                color="red"
                size="default"
                id="readmoreBtn"
                onClick={addToCart}
              >
                Add to cart
              </IonButton>
            </IonRow>
          </IonCol>
        </IonRow>
        <IonRow></IonRow>
      </IonGrid>
    </IonCard>
  );
};

export default TicketCard;
