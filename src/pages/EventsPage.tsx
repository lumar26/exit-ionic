import React, { useEffect, useState } from "react";
import { IonContent, IonHeader, IonImg, IonPage } from "@ionic/react";
import axios from "axios";
import Event from "../model/Event";
import EventList from "../components/event/EventList";
import NavBar from "../components/navigation/NavBar";

const eventsUrl = "http://localhost:8000/api/events";

const EventsPage: React.FC = () => {
  const [events, setEvents] = useState<Array<Event>>([]);

  useEffect(() => {
    axios.get<Array<Event>>(eventsUrl).then((response) => {
      console.log("Response after GET events");
      setEvents(response.data);
      events.forEach((evt) => console.log(evt));
    });
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <NavBar />
      </IonHeader>
      <IonContent>
        <IonImg src={"/images/events.jpeg"} className="img"></IonImg>
        <EventList events={events} />
      </IonContent>
    </IonPage>
  );
};

export default EventsPage;
