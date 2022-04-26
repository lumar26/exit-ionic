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
import React, {useState} from "react";
import axios from "axios";
import Performer from "../../model/Performer";
import {useAuthentication} from "../../store/AuthenticationContext";
import {useHistory} from "react-router";

const postPerformerUrl = "http://127.0.0.1:8000/api/performers"

const AddPerformer: React.FC<{}> = () => {
    const [name, setName] = useState<string>();
    const [lastname, setLastname] = useState<string>();
    const [nickname, setNickname] = useState<string>();
    const [genre, setGenre] = useState<string>();
    const [image, setImage] = useState<string>();

    const authentication = useAuthentication();
    const history = useHistory();

    function addPerformer() {
        console.log(authentication.authenticatedUser)
        axios.post<Performer>(postPerformerUrl, {
            name: name,
            surname: lastname,
            nick: nickname,
            music_genre: genre,
            image: image,
            user_id: authentication.authenticatedUser?.id || Math.floor(Math.random() * 10)
        }).then(response => {
            console.log(response.data)
            alert("Performer added: " + response.data.nick)
            history.push("/performers")
        }).catch(error => alert(error.message))
    }

    return (
        <IonCard>
            <IonCardTitle className="addPerformerTitle">
                <IonToolbar color="grey">Add performer</IonToolbar>
            </IonCardTitle>

            <IonCardContent>
                <IonGrid>
                    <IonRow>
                        <IonCol className="addPerformerCol">
                            <IonItem>
                                <IonLabel position="floating">Performer name:</IonLabel>
                                <IonInput
                                    type="text"
                                    id="addPerformerName"
                                    name="name"
                                    onIonChange={(e) => setName(e.detail.value!)}
                                    clearInput
                                ></IonInput>
                            </IonItem>
                            <IonItem>
                                <IonLabel position="floating">Performer surname:</IonLabel>
                                <IonInput
                                    type="text"
                                    id="addPerformerSurname"
                                    name="surname"
                                    onIonChange={(e) => setLastname(e.detail.value!)}
                                    clearInput
                                ></IonInput>
                            </IonItem>

                            <IonItem>
                                <IonLabel position="floating">Performer nickname:</IonLabel>
                                <IonInput
                                    type="text"
                                    id="addPerformerNickname"
                                    name="nickname"
                                    onIonChange={(e) => setNickname(e.detail.value!)}
                                    clearInput
                                ></IonInput>
                            </IonItem>

                            <IonItem>
                                <IonLabel position="floating">Music genre:</IonLabel>
                                <IonInput
                                    type="text"
                                    id="addMusicGenre"
                                    name="genre"
                                    onIonChange={(e) => setGenre(e.detail.value!)}
                                    clearInput
                                ></IonInput>
                            </IonItem>

                            {/*<IonRadioGroup name="genre">*/}
                            {/*  <IonListHeader>*/}
                            {/*    <IonLabel>Music genre:</IonLabel>*/}
                            {/*  </IonListHeader>*/}
                            {/*  <IonItem>*/}
                            {/*    <IonLabel>Genre 1</IonLabel>*/}
                            {/*    <IonRadio*/}
                            {/*      slot="start"*/}
                            {/*      color="primary"*/}
                            {/*      value="genre1"*/}
                            {/*    ></IonRadio>*/}
                            {/*  </IonItem>*/}
                            {/*  <IonItem>*/}
                            {/*    <IonLabel>Genre 2</IonLabel>*/}
                            {/*    <IonRadio*/}
                            {/*      slot="start"*/}
                            {/*      color="primary"*/}
                            {/*      value="genre2"*/}
                            {/*    ></IonRadio>*/}
                            {/*  </IonItem>*/}
                            {/*  <IonItem>*/}
                            {/*    <IonLabel>Genre 3</IonLabel>*/}
                            {/*    <IonRadio*/}
                            {/*      slot="start"*/}
                            {/*      color="primary"*/}
                            {/*      value="genre3"*/}
                            {/*    ></IonRadio>*/}
                            {/*  </IonItem>*/}
                            {/*</IonRadioGroup>*/}
                            <IonItem className="addPerformerImg">
                                <IonLabel position="floating">Image:</IonLabel>

                                <IonInput
                                    type="text"
                                    id="addPerformerImage"
                                    onIonChange={(e) => setImage(e.detail.value!)}
                                    clearInput
                                ></IonInput>
                            </IonItem>
                            <IonButton
                                expand="full"
                                type="submit"
                                onClick={addPerformer}
                                color="grey"
                                className="addPerformerCard"
                            >
                                Add performer
                            </IonButton>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonCardContent>
        </IonCard>
    );
};

export default AddPerformer;
