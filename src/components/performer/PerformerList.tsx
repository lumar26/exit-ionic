import React from "react";
import {IonList} from "@ionic/react";
import PerformerCard from "./PerformerCard";
import Performer from "../../model/Performer";

const EventList: React.FC<{
    performers: Array<Performer>,
}> = ({performers}) => {
    return (
        <IonList>
            {performers.map(performer => <PerformerCard key={performer.id} performer={performer} />)}
        </IonList>
    );
}
export default EventList;