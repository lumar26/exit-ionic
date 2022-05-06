import {
    IonButton,
    IonCard,
    IonCardContent,
    IonCardTitle,
    IonCol,
    IonGrid,
    IonInput,
    IonItem,
    IonLabel,
    IonRow,
    IonSelect,
    IonSelectOption,
    IonToolbar,
} from "@ionic/react";
import React, {useEffect, useRef, useState} from "react";
import {useAuthentication} from "../../../store/AuthenticationContext";
import Stage from "../../../model/Stage";
import Event from "../../../model/Event"
import {useStages} from "../../../store/StagesContext";
import {usePerformers} from "../../../store/PerformersContext";
import {useEvents} from "../../../store/EventsContext";

const UpdateEventCard: React.FC<{
    event: Event
}> = ({event}) => {
    const [stage, setStage] = useState<Stage>();
    const nameRef = useRef<HTMLIonInputElement>(null)
    const startRef = useRef<HTMLIonInputElement>(null)
    const imageRef = useRef<HTMLIonInputElement>(null)
    // const stageRef = useRef<HTMLIonInputElement>(null)
    const performersRef = useRef<HTMLIonSelectElement>(null)

    const authentication = useAuthentication();
    const stagesContext = useStages();
    const eventsContext = useEvents();
    const performersContext = usePerformers();

    useEffect(() => {
        stagesContext.getAllStages();
        console.log(stagesContext.stages);

        performersContext.getAllPerformers();
        console.log(performersContext.performers);
    }, []);

    function updateEvent() {
        let newEvent: Event = {
            id: event.id,
            image: imageRef.current!.value as string,
            name: nameRef.current!.value as string,
            start: startRef.current!.value as string,
            stage: stage ? stage : event.stage,
            performers: performersRef.current?.value,
            user_id:
                authentication.authenticatedUser?.id ||
                Math.floor(Math.random() * 10),
        }
        console.log('Updated event')
        console.log(newEvent)
        eventsContext.updateEvent(newEvent, event.id);
    }

    return (
        <IonCard>
            <IonCardTitle className="addPerformerTitle">
                <IonToolbar color="grey">Add event</IonToolbar>
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
                                <IonLabel position="floating">Select performer(s) for event</IonLabel>
                                <IonSelect
                                    name="performers"
                                    multiple
                                    ref={performersRef}
                                >
                                    {performersContext.performers &&
                                        performersContext.performers.map((performer, index) => (
                                            <IonSelectOption value={performer} key={index}>
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
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonCardContent>
        </IonCard>
    );
};

export default UpdateEventCard;
