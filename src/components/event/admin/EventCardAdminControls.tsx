import React, {useState} from "react";
import {IonButton, IonCol, IonGrid, IonIcon, IonModal, IonRow} from "@ionic/react";
import {create, trash} from "ionicons/icons";
import {useEvents} from "../../../store/EventsContext";
import Event from '../../../model/Event'


const EventCardAdminControls: React.FC<{
    event: Event
}> = ({event}) => {

    const [showModalUpdate, setShowModalUpdate] = useState(false);

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
                <IonModal
                    onIonModalDidDismiss={() => setShowModalUpdate(false)}
                    isOpen={showModalUpdate}
                >
                    {/*<UpdatePerformerForm performer={event}/>*/}
                    <IonButton
                        color="grey"
                        size="default"
                        onClick={() => setShowModalUpdate(false)}
                    >
                        Close
                    </IonButton>
                </IonModal>
                <IonCol>
                    <IonButton
                        onClick={() => setShowModalUpdate(true)}
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