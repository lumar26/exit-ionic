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
    IonToolbar,
    useIonAlert,
} from "@ionic/react";
import React, {useRef} from "react";
import Stage from "../../../model/Stage";
import {useStages} from "../../../store/StagesContext";
import {useAuthentication} from "../../../store/AuthenticationContext";
import {useHistory} from "react-router-dom";
import {useError} from "../../../store/ErrorContext";

const UpdateStageCard: React.FC<{ stage: Stage }> = ({stage}) => {
    const stagesContext = useStages();
    const auth = useAuthentication();
    const [present] = useIonAlert();
    const {addError} = useError()

    const nameRef = useRef<HTMLIonInputElement>(null);
    const locationRef = useRef<HTMLIonInputElement>(null);
    const capacityRef = useRef<HTMLIonInputElement>(null);
    const sponsorRef = useRef<HTMLIonInputElement>(null);
    const imageRef = useRef<HTMLIonInputElement>(null);

    const history = useHistory()

    const updateStage = () => {
        let newStageValue: Stage = {
            id: stage.id,
            name: nameRef.current!.value! as string,
            location: locationRef.current!.value! as string,
            capacity: capacityRef.current!.value! as number,
            sponsor: sponsorRef.current!.value! as string,
            image: imageRef.current!.value! as string,
            user_id: auth.userId!,
        };
        if (
            newStageValue.name === "" ||
            newStageValue.location === "" ||
            newStageValue.capacity == null ||
            newStageValue.capacity < 1 ||
            newStageValue.sponsor === "" ||
            newStageValue.image === ""
        ) {
            present(" You must fill all required information.", [{text: "Ok"}]);
            return;
        }

        // delegating CRUD operations to context
        stagesContext.updateStage(newStageValue, stage.id)
            ?.catch(() => {
                addError("Could not update stage with new values. Check all input data")
                return;
            });

        present("Stage: " + newStageValue.name + " successfully updated.", [
            {text: "Ok"},
        ]);
        history.goBack()
    };
    return (
        <IonCard className="updatePerformerCard">
            <IonCardTitle className="updatePerformerTitle">
                <IonToolbar color="grey">Update stage</IonToolbar>
            </IonCardTitle>

            <IonCardContent>
                <IonGrid>
                    <IonRow>
                        <IonCol className="addPerformerCol">
                            <IonItem>
                                <IonLabel position="stacked">Stage name:</IonLabel>
                                <IonInput
                                    type="text"
                                    id="addPerformerName"
                                    name="name"
                                    ref={nameRef}
                                    // onIonChange={(e) => setName(e.detail.value!)}
                                    clearInput
                                    value={stage.name}
                                ></IonInput>
                            </IonItem>
                            <IonItem>
                                <IonLabel position="stacked">Stage location:</IonLabel>
                                <IonInput
                                    type="text"
                                    id="addPerformerSurname"
                                    name="location"
                                    ref={locationRef}
                                    // onIonChange={(e) => setLocation(e.detail.value!)}
                                    clearInput={true}
                                    value={stage.location}
                                ></IonInput>
                            </IonItem>

                            <IonItem>
                                <IonLabel position="stacked">Stage capacity:</IonLabel>
                                <IonInput
                                    type="text"
                                    id="addPerformerNickname"
                                    name="capacity"
                                    ref={capacityRef}
                                    // onIonChange={(e) => setCapacity(parseInt(e.detail.value!, 5))}
                                    clearInput
                                    value={stage.capacity + ""}
                                ></IonInput>
                            </IonItem>

                            <IonItem>
                                <IonLabel position="stacked">Sponsor:</IonLabel>
                                <IonInput
                                    type="text"
                                    id="addMusicGenre"
                                    name="sponsor"
                                    ref={sponsorRef}
                                    // onIonChange={(e) => setSponsor(e.detail.value!)}
                                    clearInput
                                    value={stage.sponsor}
                                ></IonInput>
                            </IonItem>

                            <IonItem className="addPerformerImg">
                                <IonLabel position="stacked">Image:</IonLabel>
                                <IonInput
                                    type="text"
                                    id="addPerformerImage"
                                    ref={imageRef}
                                    // onIonChange={(e) => setImage(e.detail.value!)}
                                    clearInput
                                    value={stage.image}
                                ></IonInput>
                            </IonItem>
                            <IonButton
                                expand="full"
                                type="submit"
                                onClick={updateStage}
                                color="grey"
                                className="addPerformerCard"
                                id="updatePerformerButton"
                            >
                                Update stage
                            </IonButton>
                            <IonButton
                                expand="full"
                                type="submit"
                                onClick={() =>history.goBack()}
                                color="grey"
                                className="addPerformerCard"
                                id="updatePerformerButton"
                            >
                                Cancel update
                            </IonButton>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonCardContent>
        </IonCard>
    );
};

export default UpdateStageCard;