import React from "react";
import {IonList} from "@ionic/react";
import PerformerCard from "./PerformerCard";
import Performer from "../../model/Performer";

const EventList: React.FC<{
    performers: Array<Performer>,
}> = ({performers}) => {
    return (
        <IonList>
            {performers.map(p => <PerformerCard key={p.id} performer={p} />)}
        </IonList>
    );
}
export default EventList;