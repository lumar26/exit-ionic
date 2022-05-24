import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardTitle,
  IonCol,
  IonGrid,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonModal,
  IonRow,
  IonText,
  IonToolbar,
  useIonAlert,
} from "@ionic/react";
import React, { useState } from "react";
import axios from "axios";
import Stage from "../../../model/Stage";
import { useAuthentication } from "../../../store/AuthenticationContext";
import { useHistory } from "react-router";
import { useStages } from "../../../store/StagesContext";
import { addCircle } from "ionicons/icons";

const AddStage: React.FC<{}> = () => {
  const [name, setName] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [capacity, setCapacity] = useState<number>(0);
  const [sponsor, setSponsor] = useState<string>("");
  const [image, setImage] = useState<string>("");
  const [showModalAdd, setShowModalAdd] = useState(false);

  const authentication = useAuthentication();
  const history = useHistory();
  const [present] = useIonAlert();
  const stagesContext = useStages();

  function addStage() {
    let newStage: Stage = {
      id: 0,
      name: name,
      location: location,
      capacity: capacity,
      sponsor: sponsor,
      image: image,
      user_id: authentication.userId!,
    };
    if (
      newStage.name == "" ||
      newStage.location == "" ||
      newStage.capacity == null ||
      newStage.sponsor == "" ||
      newStage.image == ""
    ) {
      present(" You must fill all required information.", [{ text: "Ok" }]);
      return;
    }

    stagesContext.addStage(newStage);
    present(newStage.name + " added successfully", [{ text: "Ok" }]);
    setShowModalAdd(false);

    return;
  }

  return (
    <IonToolbar>
      <IonModal
        onDidDismiss={() => setShowModalAdd(false)}
        isOpen={showModalAdd}
      >
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
        <IonButton
          color="grey"
          onClick={() => {
            setShowModalAdd(false);
          }}
        >
          Close
        </IonButton>
      </IonModal>
      <IonButton
        onClick={() => setShowModalAdd(true)}
        color="grey"
        expand={"block"}
      >
        <IonText>Add new stage</IonText>
        <IonIcon icon={addCircle} className="iconMenu" slot="end"></IonIcon>
      </IonButton>
    </IonToolbar>
  );
};

export default AddStage;
