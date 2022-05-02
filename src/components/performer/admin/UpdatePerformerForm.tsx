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
} from "@ionic/react";
import React, {useEffect, useState} from "react";
import Performer from "../../../model/Performer";
import axios from "axios";
import {useAuthentication} from "../../../store/AuthenticationContext";

const apiUrl = "http://localhost:8000/api/performers"

const UpdatePerformerForm: React.FC<{ performer: Performer }> = ({performer}) => {

    const authentication = useAuthentication();

    const initialPerformer: Performer = {
        id: -999,
        name: "",
        surname: "",
        image: "",
        nick: "",
        music_genre: "",
    };
    const [currentPerformer, setCurrentPerformer] = useState(initialPerformer);

    useEffect(() => {
        console.log('Printing performer in UpdatePerformerModal: ' + performer.id)
    }, []);


    const [name, setName] = useState<string>();
    const [lastname, setLastname] = useState<string>();
    const [nick, setNick] = useState<string>();
    const [genre, setGenre] = useState<string>();
    const [image, setImage] = useState<string>();

    function updatePerformer() {
        // todo: validation necessary
        let updatedPerformer: Performer = {
            id: currentPerformer.id,
            name: name ? name : currentPerformer.name,
            surname: lastname ? lastname : currentPerformer.surname,
            image: image ? image : currentPerformer.image,
            nick: nick ? nick : currentPerformer.nick,
            music_genre: genre ? genre : currentPerformer.music_genre,
        };

        setCurrentPerformer(updatedPerformer);

        axios
            .put(`${apiUrl}/${currentPerformer.id}`, updatedPerformer, {
                headers: {
                    'Authorization': authentication.tokenType + " " + authentication.accessToken
                }
            })
            .then((response) => {
                console.log('Updated performer: ' + response.data);
            })
            .catch((e) => {
                console.log(e);
            });
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
                                    onIonChange={(e) => setName(e.detail.value!)}
                                    clearInput
                                    value={currentPerformer.name}
                                ></IonInput>
                            </IonItem>
                            <IonItem>
                                <IonLabel position="stacked">Performer surname:</IonLabel>
                                <IonInput
                                    type="text"
                                    id="addPerformerSurname"
                                    name="surname"
                                    onIonChange={(e) => setLastname(e.detail.value!)}
                                    clearInput
                                    placeholder={currentPerformer.surname}
                                ></IonInput>
                            </IonItem>

                            <IonItem>
                                <IonLabel position="stacked">Performer nickname:</IonLabel>
                                <IonInput
                                    type="text"
                                    id="addPerformerNickname"
                                    name="nickname"
                                    onIonChange={(e) => setNick(e.detail.value!)}
                                    clearInput
                                    placeholder={currentPerformer.nick}
                                ></IonInput>
                            </IonItem>

                            <IonItem>
                                <IonLabel position="stacked">Music genre:</IonLabel>
                                <IonInput
                                    type="text"
                                    id="addMusicGenre"
                                    name="genre"
                                    onIonChange={(e) => setGenre(e.detail.value!)}
                                    clearInput
                                    placeholder={currentPerformer.music_genre}
                                ></IonInput>
                            </IonItem>

                            <IonItem className="addPerformerImg">
                                <IonLabel position="stacked">Image:</IonLabel>

                                <IonInput
                                    type="text"
                                    id="addPerformerImage"
                                    onIonChange={(e) => setImage(e.detail.value!)}
                                    clearInput
                                    placeholder={currentPerformer.image}
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
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonCardContent>
        </IonCard>
    );
};

export default UpdatePerformerForm;
