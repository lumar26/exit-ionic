import React, {useState} from "react";
import {IonButton, IonCol, IonContent, IonGrid, IonIcon, IonModal, IonRow} from "@ionic/react";
import {create, trash} from "ionicons/icons";
import {useEvents} from "../../../store/EventsContext";
import Event from '../../../model/Event'
import UpdateEventCard from "./UpdateEventCard";
import {useHistory} from "react-router-dom";


const EventCardAdminControls: React.FC<{
    event: Event
}> = ({event}) => {

    const [showModalUpdate, setShowModalUpdate] = useState(false);

    const history = useHistory();
    const eventsContext = useEvents();

    const deleteEvent = () => {
        eventsContext.deleteEvent(event);
    };

    return (
        <IonGrid>
            <IonRow>
                <IonCol>
                    <IonButton
                        onClick={deleteEvent}
                        expand={"block"} color={'danger'}>
                        <IonIcon
                            icon={trash}
                            className="tableIcon"
                            size="medium"
                        />
                        Delete
                    </IonButton>
                </IonCol>
            </IonRow>
            <IonRow>
                {/*<IonModal*/}
                {/*    onIonModalDidDismiss={() => setShowModalUpdate(false)}*/}
                {/*    isOpen={showModalUpdate}*/}
                {/*    canDismiss={!showModalUpdate}*/}
                {/*>*/}
                {/*    <IonContent>*/}
                {/*        <UpdateEventCard event={event}/>*/}
                {/*        <IonButton*/}
                {/*            color="grey"*/}
                {/*            size="default"*/}
                {/*            onClick={() => {*/}
                {/*                setShowModalUpdate(false);*/}
                {/*            }}*/}
                {/*        >*/}
                {/*            Close*/}
                {/*        </IonButton>*/}
                {/*    </IonContent>*/}
                {/*</IonModal>*/}
                <IonCol>
                    <IonButton
                        onClick={() => {
                            // setShowModalUpdate(true)
                            history.push(`/events/update/${event.id}`)
                        }}
                        expand={"block"}>
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
}

export default EventCardAdminControls;