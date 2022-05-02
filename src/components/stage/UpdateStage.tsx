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
import React, { useEffect, useState } from "react";
import axios from "axios";
import Stage from "../../model/Stage";

const UpdateStage: React.FC<{ stage: Stage }> = ({ stage }) => {
  //let navigate = Navigate();

  const initialStage: Stage = {
    id: -999,
    name: "",
    location: "",
    image: "",
    capacity: 0,
    sponsor: "",
  };
  const [currentStage, setCurrentStage] = useState(initialStage);
  const [message, setMessage] = useState("");

  const getStage = (id: number) => {
    axios
      .get<Stage>(`http://localhost:8000/api/stages/${id}`)
      .then((response) => {
        console.log("Response after GET stage");
        setCurrentStage(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    if (stage) getStage(stage.id);
  }, []);

  const [name, setName] = useState<string>();
  const [location, setLocation] = useState<string>();
  const [capacity, setCapacity] = useState<number>();
  const [sponsor, setSponsor] = useState<string>();
  const [image, setImage] = useState<string>();

  function updateStage() {
    var updatedStage: Stage = {
      id: currentStage.id,
      name: currentStage.name,
      location: currentStage.location,
      image: currentStage.image,
      capacity: currentStage.capacity,
      sponsor: currentStage.sponsor,
    };
    setCurrentStage(updatedStage);
    axios
      .put(`/stages/${currentStage.id}`, updatedStage)
      .then((response) => {
        console.log(response.data);
        setMessage("stage was updated successfully!");
      })
      .catch((e) => {
        console.log(e);
      });
  }

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
                  onIonChange={(e) => setName(e.detail.value!)}
                  clearInput
                  value={currentStage.name}
                ></IonInput>
              </IonItem>
              <IonItem>
                <IonLabel position="stacked">Stage location:</IonLabel>
                <IonInput
                  type="text"
                  id="addPerformerSurname"
                  name="location"
                  onIonChange={(e) => setLocation(e.detail.value!)}
                  clearInput
                  placeholder={currentStage.location}
                ></IonInput>
              </IonItem>

              <IonItem>
                <IonLabel position="stacked">Stage capacity:</IonLabel>
                <IonInput
                  type="text"
                  id="addPerformerNickname"
                  name="capacity"
                  onIonChange={(e) => setCapacity(parseInt(e.detail.value!, 5))}
                  clearInput
                  placeholder={currentStage.capacity + ""}
                ></IonInput>
              </IonItem>

              <IonItem>
                <IonLabel position="stacked">Sponsor:</IonLabel>
                <IonInput
                  type="text"
                  id="addMusicGenre"
                  name="sponsor"
                  onIonChange={(e) => setSponsor(e.detail.value!)}
                  clearInput
                  placeholder={currentStage.sponsor}
                ></IonInput>
              </IonItem>

              <IonItem className="addPerformerImg">
                <IonLabel position="stacked">Image:</IonLabel>

                <IonInput
                  type="text"
                  id="addPerformerImage"
                  onIonChange={(e) => setImage(e.detail.value!)}
                  clearInput
                  placeholder={currentStage.image}
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
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonCardContent>
    </IonCard>
  );
};

export default UpdateStage;
