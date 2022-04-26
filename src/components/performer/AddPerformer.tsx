import {
  IonCol,
  IonGrid,
  IonInput,
  IonItem,
  IonLabel,
  IonCard,
  IonRow,
  IonButton,
  IonTitle,
  IonRadioGroup,
  IonRadio,
  IonListHeader,
  IonCardTitle,
  IonCardContent,
  IonToolbar,
  IonText,
} from "@ionic/react";
import React, { useState } from "react";
import Performer from "../../model/Performer";

const AddPerformer: React.FC<{}> = () => {
  const [name, setName] = useState<string>();
  const [lastname, setLastname] = useState<string>();
  const [nickname, setNickname] = useState<string>();
  const [genre, setGenre] = useState<string>();
  const [image, setImage] = useState<string>();

  function addPerformer() {
    const info =
      document.getElementById("addPerformerName") +
      " " +
      document.getElementById("addPerformerSuname") +
      " " +
      document.getElementById("addPerformerLastname");
    console.log("Addend peformer: " + info);
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

              <IonRadioGroup name="genre">
                <IonListHeader>
                  <IonLabel>Music genre:</IonLabel>
                </IonListHeader>
                <IonItem>
                  <IonLabel>Genre 1</IonLabel>
                  <IonRadio
                    slot="start"
                    color="primary"
                    value="genre1"
                  ></IonRadio>
                </IonItem>
                <IonItem>
                  <IonLabel>Genre 2</IonLabel>
                  <IonRadio
                    slot="start"
                    color="primary"
                    value="genre2"
                  ></IonRadio>
                </IonItem>
                <IonItem>
                  <IonLabel>Genre 3</IonLabel>
                  <IonRadio
                    slot="start"
                    color="primary"
                    value="genre3"
                  ></IonRadio>
                </IonItem>
              </IonRadioGroup>
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
