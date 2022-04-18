import {IonContent, IonHeader, IonPage} from '@ionic/react';
import Event from "../model/Event";
import React from "react";
import StageCard from "../components/stage/StageCard";
import PerformerCard from "../components/performer/PerformerCard";
import EventList from "../components/event/EventList";

const Home: React.FC = () => {

    const events : Array<Event> = [
        {
            id: 1,
            name: "Nick Cave and the Bad Seeds",
            date: "2022-07-20T20:00:00.000000Z",
            img: "/images/performers/nick-cave.jpg",
            stage: "null",
            performers: "null",
        },
        {
            id: 2,
            name: "Meduza haos",
            date: "2022-07-21T18:00:00.000000Z",
            img: "/images/performers/meduza.jpg",
            stage: "null",
            performers: "null",
        },
    ];

    return (
        <IonPage>
            <IonHeader>
            </IonHeader>
            <IonContent fullscreen>
                <EventList events={events} />
                <StageCard/>
                <PerformerCard/>
            </IonContent>
        </IonPage>
    );
};

export default Home;
