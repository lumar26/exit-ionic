import React from "react";
import {IonCol, IonGrid, IonImg, IonRow} from "@ionic/react";
import CartCard from "./CartCard";
import AvailableTicketsAccordion from "./AvailableTicketsAccordion";

const TicketsPageContent : React.FC = () => {
  return (
      <>
        <IonImg src={"/images/tickets.jpeg"} className="imgTop"></IonImg>
        <IonGrid className="ticketsGrid">
          <IonRow>
            <IonCol className="accordionGroup">
              <AvailableTicketsAccordion />
            </IonCol>
            <IonCol className="sideTickets">
              <CartCard/>
            </IonCol>
          </IonRow>
        </IonGrid>
      </>
  );
}

export default TicketsPageContent;