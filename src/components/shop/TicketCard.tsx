import {
  IonButton,
  IonCard,
  IonCol,
  IonGrid,
  IonImg,
  IonLabel,
  IonRow,
  IonTitle,
} from "@ionic/react";
import Ticket from "../../model/Ticket";

const TicketCard: React.FC<{ ticket: Ticket }> = (ticket) => {
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
          </IonCol>
        </IonRow>
        <IonRow></IonRow>
      </IonGrid>
    </IonCard>
  );
};

export default TicketCard;
