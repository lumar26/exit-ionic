import {
    IonButton,
    IonCard,
    IonCardContent,
    IonCardTitle,
    IonCol,
    IonGrid,
    IonHeader,
    IonInput,
    IonItem,
    IonLabel,
    IonRow,
    IonSelect,
    IonSelectOption,
    IonToolbar,
    useIonAlert,
} from "@ionic/react";
import React, {useEffect, useRef, useState} from "react";
import {useAuthentication} from "../../../store/AuthenticationContext";
import Stage from "../../../model/Stage";
import Event from "../../../model/Event";
import {useStages} from "../../../store/StagesContext";
import {usePerformers} from "../../../store/PerformersContext";
import {useEvents} from "../../../store/EventsContext";
import {useHistory} from "react-router-dom";
import {useError} from "../../../store/ErrorContext";

const UpdateEventCard: React.FC<{
    event: Event;
}> = ({event}) => {
    const [stage, setStage] = useState<Stage>();
    const nameRef = useRef<HTMLIonInputElement>(null);
    const startRef = useRef<HTMLIonInputElement>(null);
    const imageRef = useRef<HTMLIonInputElement>(null);
    const performersRef = useRef<HTMLIonSelectElement>(null);

    const authentication = useAuthentication();
    const stagesContext = useStages();
    const eventsContext = useEvents();
    const performersContext = usePerformers();
    const [present] = useIonAlert();

    const history = useHistory();
    const {addError} = useError()

    useEffect(() => {
        stagesContext.getAllStages();
        performersContext.getAllPerformers();
    }, []);

    function updateEvent() {
        let newEvent: Event = {
            id: event.id,
            image: imageRef.current!.value as string,
            name: nameRef.current!.value as string,
            start: startRef.current!.value as string,
            stage: stage ? stage : event.stage,
            performers: performersRef.current?.value,
            user_id: authentication.userId || Math.floor(Math.random() * 10),
        };
        if (
            newEvent.name === "" ||
            newEvent.start === "" ||
            newEvent.stage == null ||
            newEvent.performers == null ||
            newEvent.image === ""
        ) {
            present(" You must fill all required information.", [{text: "Ok"}]);
            return;
        }
        eventsContext.updateEvent(newEvent, event.id)?.catch(() => {
            addError("Could not update event. Pleas check input information.")
            return
        });

        present("Event successfully updated.", [{text: "Ok"}]);
        history.push("/events");
        return;
    }

    return (
        <IonCard className="updatePerformerCard">
            <IonCardTitle className="updatePerformerTitle">
                <IonHeader>
                    <IonToolbar color="grey">
                        {" "}
                        Updating event: <b>{event.name}</b>
                    </IonToolbar>
                </IonHeader>
            </IonCardTitle>

            <IonCardContent>
                <IonGrid>
                    <IonRow>
                        <IonCol className="addPerformerCol">
                            <IonItem>
                                <IonLabel position="floating">Event name:</IonLabel>
                                <IonInput
                                    type="text"
                                    id="addPerformerName"
                                    name="name"
                                    value={event.name}
                                    ref={nameRef}
                                    clearInput
                                ></IonInput>
                            </IonItem>
                            <IonItem>
                                <IonLabel position="floating">Event starts:</IonLabel>
                                <IonInput
                                    type="text"
                                    id="addPerformerSurname"
                                    name="start"
                                    value={event.start}
                                    ref={startRef}
                                    clearInput
                                ></IonInput>
                            </IonItem>
                            <IonItem>
                                <IonLabel position="floating">Select stage for event</IonLabel>
                                <IonSelect
                                    name="stage"
                                    onIonChange={(e) => setStage(e.detail.value!)}
                                >
                                    {stagesContext.stages &&
                                        stagesContext.stages.map((stage, index) => (
                                            <IonSelectOption value={stage} key={index}>
                                                {stage.name}
                                            </IonSelectOption>
                                        ))}
                                </IonSelect>
                            </IonItem>
                            <IonItem>
                                <IonLabel position="floating">
                                    Select performer(s) for event
                                </IonLabel>
                                <IonSelect name="performers" multiple ref={performersRef}>
                                    {performersContext.performers &&
                                        performersContext.performers.map((performer, index) => (
                                            <IonSelectOption value={performer.id} key={index}>
                                                {performer.name}
                                            </IonSelectOption>
                                        ))}
                                </IonSelect>
                            </IonItem>
                            <IonItem className="addPerformerImg">
                                <IonLabel position="floating">Event image:</IonLabel>
                                <IonInput
                                    type="text"
                                    id="addPerformerImage"
                                    value={event.image}
                                    ref={imageRef}
                                    clearInput
                                ></IonInput>
                            </IonItem>
                            <IonButton
                                expand="full"
                                type="submit"
                                onClick={updateEvent}
                                color="grey"
                                className="addPerformerCard"
                            >
                                Update event
                            </IonButton>
                            <IonButton
                                expand="full"
                                type="submit"
                                onClick={() => history.goBack()}
                                color="grey"
                                className="addPerformerCard"
                                id="updatePerformerButton"
                            >
                                Cancel updating
                            </IonButton>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonCardContent>
        </IonCard>
    );
};

export default UpdateEventCard;
