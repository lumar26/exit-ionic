import React, { useEffect, useState } from "react";
import NavBar from "../components/navigation/NavBar";
import TicketCard from "../components/shop/TicketCard";
import {
  IonAccordion,
  IonAccordionGroup,
  IonCard,
  IonCardContent,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonImg,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonRow,
  IonButton,
  IonSelect,
  IonSelectOption,
} from "@ionic/react";
import { cartOutline, removeCircleOutline } from "ionicons/icons";
import Ticket from "../model/Ticket";
import Stage from "../model/Stage";
import { useAuthentication } from "../store/AuthenticationContext";
import { useStages } from "../store/StagesContext";
import { useHistory } from "react-router";

const Tickets: React.FC = () => {
  const authentication = useAuthentication();
  const stagesContext = useStages();
  const [stage, setStage] = useState<Stage>();
  const cart = Array<Ticket>();

  const history = useHistory();

  useEffect(() => {
    stagesContext.getAllStages();
    console.log(stagesContext.stages);
  }, []);

  function addToCart(ticket: Ticket) {
    console.log("Add to cart button clicked. Ticket id: " + ticket.id);
    console.log("Ticket stage: " + ticket.stage.name);
    console.log("Ticket purchaseDate : " + ticket.purchaseDate);
    cart.push(ticket);
  }

  function setTicketStage(ticket: Ticket, stage: Stage) {
    ticket.stage = stage;
  }

  function getTotal() {
    let i;
    let total = 0;
    for (i = 0; i < cart.length; i++) {
      total += cart[i].price - (cart[i].price * cart[i].discount) / 100;
    }
    return total;
  }

  function removeFromCart(ticket: Ticket) {
    cart.splice(cart.indexOf(ticket), 1);
  }

  const group1: Array<Ticket> = [
    {
      id: 1,
      title: "Regular 4-Day Ticket",
      img: "/images/tickets/4.png",
      price: 119,
      discount: 0,
      purchaseDate: new Date(),
      stage: stage!,
      description:
        "This is a general admission pass, giving you 4 nights of EXIT Festival in the beautiful scenery of the Petrovaradin Fortress.",
    },
    {
      id: 2,
      title: "4-Day Ticket (5 for 4)",
      img: "/images/tickets/4.png",
      price: 95,
      discount: 0,
      purchaseDate: new Date(),
      stage: stage!,
      description:
        "This is a general admission pass, giving you 4 nights of EXIT Festival in the beautiful scenery of the Petrovaradin Fortress.",
    },
    {
      id: 3,
      title: "VIP GOLD 4-Day Ticket",
      img: "/images/tickets/4gold.png",
      price: 300,
      discount: 0,
      purchaseDate: new Date(),
      stage: stage!,
      description:
        "This is a VIP pass, giving you 4 nights of EXIT Festival in the beautiful scenery of the Petrovaradin Fortress and special access to our VIP facilities.",
    },
    {
      id: 4,
      title: "Regular 2-Day Ticket",
      img: "/images/tickets/1.png",
      price: 34,
      discount: 0,
      purchaseDate: new Date(),
      stage: stage!,
      description:
        "This is a general admission day ticket, giving you 1 entry on 1 night of EXIT Festival in the beautiful scenery of the Petrovaradin Fortress, including the headline concert of Nick Cave and The Bad Seeds.",
    },
    {
      id: 5,
      title: "VIP GOLD Day 2 Ticket",
      img: "/images/tickets/1gold.png",
      price: 100,
      discount: 0,
      purchaseDate: new Date(),
      stage: stage!,
      description:
        "This is a VIP day ticket, giving you 1 entry on 1 night of EXIT Festival in the beautiful scenery of the Petrovaradin Fortress, including the headline concert of Nick Cave and The Bad Seeds, with special access to our VIP facilities.",
    },
  ];

  return (
    <IonPage>
      <IonHeader>
        <NavBar />
      </IonHeader>
      <IonContent fullscreen>
        <IonImg src={"/images/tickets.jpeg"} className="imgTop"></IonImg>
        <IonGrid className="ticketsGrid">
          <IonRow>
            <IonCol className="accordionGroup">
              <IonAccordionGroup>
                <IonAccordion value="EntryTickets">
                  <IonItem slot="header" color="grey">
                    <IonLabel>Entry tickets</IonLabel>
                  </IonItem>

                  <IonList slot="content">
                    {group1.map((t) => (
                      <>
                        <TicketCard key={t.id} ticket={t} />
                        <IonRow id="ticketStage">
                          <IonCol>
                            <IonItem>
                              <IonLabel position="floating">
                                Select stage for event
                              </IonLabel>
                              <IonSelect
                                name="stage"
                                onIonChange={(e) =>
                                  setTicketStage(t, e.detail.value!)
                                }
                              >
                                {stagesContext.stages &&
                                  stagesContext.stages.map((stage, index) => (
                                    <IonSelectOption value={stage} key={index}>
                                      {stage.name}
                                    </IonSelectOption>
                                  ))}
                              </IonSelect>
                            </IonItem>
                          </IonCol>
                          <IonCol>
                            <IonButton
                              color="red"
                              size="default"
                              id="addToCartBtn"
                              onClick={() => addToCart(t)}
                            >
                              Add to cart
                            </IonButton>
                          </IonCol>
                        </IonRow>
                      </>
                    ))}
                  </IonList>
                </IonAccordion>
                <br />
              </IonAccordionGroup>
            </IonCol>
            <IonCol className="sideTickets">
              <IonCard>
                <IonItem color="red">
                  <IonIcon icon={cartOutline} slot="start" />
                  <IonLabel>Added to cart</IonLabel>
                  <IonLabel slot="end">Total: {getTotal()}</IonLabel>
                </IonItem>

                <IonCardContent>
                  <IonList>
                    {cart?.map((ticket) => (
                      <>
                        <IonItem>
                          {ticket.title}
                          <IonButton onClick={() => removeFromCart(ticket)}>
                            <IonIcon
                              icon={removeCircleOutline}
                              slot="end"
                              color="red"
                            ></IonIcon>
                          </IonButton>
                        </IonItem>
                      </>
                    ))}
                  </IonList>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Tickets;
