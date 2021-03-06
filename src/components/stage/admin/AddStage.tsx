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
import React, { useState } from "react";
import axios from "axios";
import Stage from "../../../model/Stage";
import { useAuthentication } from "../../../store/AuthenticationContext";
import { useHistory } from "react-router";

const postStageUrl = "http://127.0.0.1:8000/api/stages";

const AddStage: React.FC<{}> = () => {
  const [name, setName] = useState<string>();
  const [location, setLocation] = useState<string>();
  const [capacity, setCapacity] = useState<number>();
  const [sponsor, setSponsor] = useState<string>();
  const [image, setImage] = useState<string>();

  const authentication = useAuthentication();
  const history = useHistory();

  function addStage() {
    console.log(authentication.authenticatedUser);
    axios
      .post<Stage>(postStageUrl, {
        name: name,
        location: location,
        capacity: capacity,
        sponsor: sponsor,
        image: image,
        user_id:
          authentication.authenticatedUser?.id ||
          Math.floor(Math.random() * 10),
      })
      .then((response) => {
        console.log(response.data);
        alert("Stage added: " + response.data.name);
        history.push("/stages");
      })
      .catch((error) => alert(error.message));
  }

  return (
    <IonCard>
      <IonCardTitle className="addPerformerTitle">
        <IonToolbar color="grey">Add stage</IonToolbar>
      </IonCardTitle>

      <IonCardContent>
        <IonGrid>
          <IonRow>
            <IonCol className="addPerformerCol">
              <IonItem>
                <IonLabel position="floating">Name:</IonLabel>
                <IonInput
                  type="text"
                  id="addPerformerName"
                  name="name"
                  onIonChange={(e) => setName(e.detail.value!)}
                  clearInput
                ></IonInput>
              </IonItem>
              <IonItem>
                <IonLabel position="floating">Location:</IonLabel>
                <IonInput
                  type="text"
                  id="addPerformerSurname"
                  name="location"
                  onIonChange={(e) => setLocation(e.detail.value!)}
                  clearInput
                ></IonInput>
              </IonItem>

              <IonItem>
                <IonLabel position="floating">Capacity:</IonLabel>
                <IonInput
                  type="text"
                  id="addPerformerNickname"
                  name="capacity"
                  onIonChange={(e) => {
                    if (e.detail.value === undefined) return;
                    setCapacity(parseInt(e.detail.value!, 5));
                  }}
                  clearInput
                ></IonInput>
              </IonItem>

              <IonItem>
                <IonLabel position="floating">Sponsor:</IonLabel>
                <IonInput
                  type="text"
                  id="addMusicGenre"
                  name="sponsor"
                  onIonChange={(e) => setSponsor(e.detail.value!)}
                  clearInput
                ></IonInput>
              </IonItem>

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
                onClick={addStage}
                color="grey"
                className="addPerformerCard"
              >
                Add stage
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonCardContent>
    </IonCard>
  );
};

export default AddStage;
