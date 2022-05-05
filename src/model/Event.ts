import Stage from "./Stage";
import Performer from "./Performer";

interface Event {
    id: number;
    image: string;
    start: string;
    name: string;
    stage: Stage;
    performers: Array<Performer>;
}

export default Event;