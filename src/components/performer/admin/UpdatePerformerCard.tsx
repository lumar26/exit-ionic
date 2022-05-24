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
import Performer from "../../../model/Performer";
import {usePerformers} from "../../../store/PerformersContext";
import {useAuthentication} from "../../../store/AuthenticationContext";
import {useHistory} from "react-router-dom";

const UpdatePerformerCard: React.FC<{ performer: Performer }> = ({
                                                                     performer,
                                                                 }) => {
    const authentication = useAuthentication();

    const performersContext = usePerformers();
    const [present] = useIonAlert();

    const nameRef = useRef<HTMLIonInputElement>(null);
    const surnameRef = useRef<HTMLIonInputElement>(null);
    const imageRef = useRef<HTMLIonInputElement>(null);
    const nickRef = useRef<HTMLIonInputElement>(null);
    const genreRef = useRef<HTMLIonInputElement>(null);

    const history = useHistory()

    function updatePerformer() {
        // todo: validation necessary
        let updatedPerformer: Performer = {
            id: performer.id,
            name: nameRef.current!.value
                ? (nameRef.current!.value as string)
                : performer.name,
            surname: surnameRef.current!.value
                ? (surnameRef.current!.value as string)
                : performer.surname,
            image: imageRef.current!.value
                ? (imageRef.current!.value as string)
                : performer.image,
            nick: nickRef.current!.value
                ? (nickRef.current!.value as string)
                : performer.nick,
            genre: genreRef.current!.value
                ? (genreRef.current!.value as string)
                : performer.genre,
            user_id: authentication.userId || Math.floor(Math.random() * 10),
        };
        if (
            updatedPerformer.name === "" ||
            updatedPerformer.surname === "" ||
            updatedPerformer.nick === "" ||
            updatedPerformer.genre === "" ||
            updatedPerformer.image === ""
        ) {
            present(" You must fill all required information.", [{text: "Ok"}]);
            return;
        }

        performersContext.updatePerformer(updatedPerformer, updatedPerformer.id);

        present(
            updatedPerformer.name +
            " " +
            updatedPerformer.surname +
            " successfully updated.",
            [{text: "Ok"}]
        );

        history.goBack();
    }

    return (
        <IonCard className="updatePerformerCard">
            <IonCardTitle className="updatePerformerTitle">
                <IonToolbar color="grey">Update performer</IonToolbar>
            </IonCardTitle>

            <IonCardContent>
                <IonGrid>
                    <IonRow>
                        <IonCol className="addPerformerCol">
                            <IonItem>
                                <IonLabel position="stacked">Performer name:</IonLabel>
                                <IonInput
                                    type="text"
                                    id="addPerformerName"
                                    name="name"
                                    ref={nameRef}
                                    clearInput
                                    value={performer.name}
                                ></IonInput>
                            </IonItem>
                            <IonItem>
                                <IonLabel position="stacked">Performer surname:</IonLabel>
                                <IonInput
                                    type="text"
                                    id="addPerformerSurname"
                                    name="surname"
                                    ref={surnameRef}
                                    clearInput
                                    value={performer.surname}
                                ></IonInput>
                            </IonItem>

                            <IonItem>
                                <IonLabel position="stacked">Performer nickname:</IonLabel>
                                <IonInput
                                    type="text"
                                    id="addPerformerNickname"
                                    name="nickname"
                                    ref={nickRef}
                                    clearInput
                                    value={performer.nick}
                                ></IonInput>
                            </IonItem>

                            <IonItem>
                                <IonLabel position="stacked">Music genre:</IonLabel>
                                <IonInput
                                    type="text"
                                    id="addMusicGenre"
                                    name="genre"
                                    ref={genreRef}
                                    clearInput
                                    value={performer.genre}
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
                                    value={performer.image}
                                ></IonInput>
                            </IonItem>
                            <IonButton
                                expand="full"
                                type="submit"
                                onClick={updatePerformer}
                                color="grey"
                                className="addPerformerCard"
                                id="updatePerformerButton"
                            >
                                Update performer
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

export default UpdatePerformerCard;
