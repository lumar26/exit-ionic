import React from "react";
import {IonButton, IonCol, IonGrid, IonIcon, IonRow,} from "@ionic/react";
import {create, trash} from "ionicons/icons";
import {useEvents} from "../../../store/EventsContext";
import Event from "../../../model/Event";
import {useHistory} from "react-router-dom";
import {useError} from "../../../store/ErrorContext";

const EventCardAdminControls: React.FC<{
    event: Event;
}> = ({event}) => {
    const history = useHistory();
    const eventsContext = useEvents();
    const {addError} = useError();

    const deleteEvent = () => {
        eventsContext.deleteEvent(event)!
            .catch(() => {
                addError("Could not delete event. There are comments on this event.")
            })
    }

    return (
        <IonGrid>
            <IonRow>
                <IonCol>
                    <IonButton onClick={deleteEvent} expand={"block"} color={"danger"}>
                        <IonIcon icon={trash} className="tableIcon" size="medium"/>
                        Delete
                    </IonButton>
                </IonCol>
            </IonRow>
            <IonRow>
                <IonCol>
                    <IonButton
                        onClick={() => {
                            history.push(`/events/update/${event.id}`);
                        }}
                        expand={"block"}
                        id="adminControlsBtn"
                    >
                        <IonIcon
                            icon={create}
                            className="tableIcon"
                            color="white"
                            size="medium"
                        />
                        Update
                    </IonButton>
                </IonCol>
            </IonRow>
        </IonGrid>
    );
};

export default EventCardAdminControls;
