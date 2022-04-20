import {IonContent, IonHeader, IonPage} from '@ionic/react';
import React, {useEffect, useState} from "react";
import Performer from "../model/Performer";
import Event from "../model/Event"
import StageList from "../components/stage/StageList";
import Stage from "../model/Stage";
import EventList from "../components/event/EventList";
import axios from 'axios';

const eventsUrl = "http://localhost:8000/api/events";

const Home: React.FC = () => {
    const [events, setEvents] = useState<Array<Event>>([]);

    useEffect(() => {
        console.log()
        axios.get<Array<Event>>(eventsUrl)
            .then(response => {
                console.log('Response after GET events');
                console.log(response.data)
                setEvents(response.data)
            });
    }, []);

    // const events : Array<Event> = [
    //     {
    //         id: 1,
    //         name: "Nick Cave and the Bad Seeds",
    //         date: "2022-07-20T20:00:00.000000Z",
    //         img: "/images/performers/nick-cave.jpg",
    //         stage: "null",
    //         performers: "null",
    //     },
    //     {
    //         id: 2,
    //         name: "Meduza haos",
    //         date: "2022-07-21T18:00:00.000000Z",
    //         img: "/images/performers/meduza.jpg",
    //         stage: "null",
    //         performers: "null",
    //     },
    // ];

    const performers: Array<Performer> = [
        {
            id: 1,
            name: "Nicholas",
            surname: "Edvard Cave",
            img: "/images/performers/nick-cave.jpg",
            nick: "Nick Cave",
            music_genre: "Rock",
        },
        {
            id: 2,
            name: "Boris",
            surname: "Brejcha",
            img: "/images/performers/brejcha.jpg",
            nick: "Brejcha",
            music_genre: "Electronic Dance Music",
        },
        {
            id: 3,
            name: "Luca",
            surname: "de Gregorio",
            img: "/images/performers/meduza.jpg",
            nick: "Meduza",
            music_genre: "Electronic music",
        },
        {
            id: 4,
            name: "Sonny",
            surname: "John Moore",
            img: "/images/performers/skrillex.jpg",
            nick: "Skrillex",
            music_genre: "Electronic Dance Music",
        },
        {
            id: 5,
            name: "Mladen",
            surname: "Solomun",
            img: "/images/performers/solomun.jpg",
            nick: "Solomun",
            music_genre: "Electronic music",
        },
    ];

    const stages: Array<Stage> = [
        {
            id: 1,
            name: "Main Stage",
            img: "/images/stages/main-stage.jpg",
            location: "Petrovaradin",
            sponsor: "Exit",
            capacity: 11991,
        },
        {
            id: 2,
            name: "Dance Arena",
            img: "/images/stages/mts-dance-arena.jpg",
            location: "Petrovaradin",
            sponsor: "mts",
            capacity: 8046,
        },
        {
            id: 3,
            name: "Fusion Stage",
            img: "/images/stages/visa-fusion-stage.jpg",
            location: "Petrovaradin",
            sponsor: "VISA",
            capacity: 7332,
        },
        {
            id: 4,
            name: "Explosive Stage",
            img: "/images/stages/explosive-pub.jpg",
            location: "Petrovaradin",
            sponsor: "Explosive pub",
            capacity: 7306,
        },
        {
            id: 5,
            name: "No Sleep Stage",
            img: "/images/stages/no-sleep.jpg",
            location: "Petrovaradin",
            sponsor: "Guarana",
            capacity: 14672,
        },
        {
            id: 6,
            name: "Gang Beats Stage",
            img: "/images/stages/cockta-beats.jpg",
            location: "Petrovaradin",
            sponsor: "Noizz",
            capacity: 12464,
        },
    ];

    return (
        <IonPage>
            <IonHeader>
            </IonHeader>
            <IonContent fullscreen>
                <EventList events={events} />
                {/*<PerformerList performers={performers}/>*/}
                {/*<StageList stages={stages}/>*/}
            </IonContent>
        </IonPage>
    );
};

export default Home;
