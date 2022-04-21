import React from "react";
import {IonList} from "@ionic/react";
import PerformerCard from "./PerformerCard";
import Performer from "../../model/Performer";
import StageCard from "../stage/StageCard";

const EventList: React.FC<{
    performers: Array<Performer>,
}> = ({performers}) => {
    // const performers1: Array<Performer> = [
    //     {
    //         id: 1,
    //         name: "Selmer Quitzon",
    //         surname: "Schroeder",
    //         nick: "Earnest Kessler",
    //         music_genre: "Ms. Dulce Schaden Jr.",
    //         user_id: 10,
    //         created_at: "2022-02-03T18:35:52.000000Z",
    //         updated_at: "2022-02-03T18:35:52.000000Z"
    //     },
    //     {
    //         "id": 2,
    //         "name": "Mrs. Amiya Hayes",
    //         "surname": "Beatty",
    //         "nick": "Ubaldo Paucek",
    //         "music_genre": "Gabrielle Schiller",
    //         "user_id": 1,
    //         "created_at": "2022-02-03T18:35:52.000000Z",
    //         "updated_at": "2022-02-03T18:35:52.000000Z"
    //     }
    // ];
    return (
        <IonList>
            {performers.map(performer => <PerformerCard key={performer.id} performer={performer} />)}
        </IonList>
    );
}
export default EventList;