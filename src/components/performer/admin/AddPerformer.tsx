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
  IonRow,
  IonText,
  IonToolbar,
  useIonAlert,
  IonModal,
} from "@ionic/react";
import { addCircle } from "ionicons/icons";
import React, { useRef, useState } from "react";
import Performer from "../../../model/Performer";
import { useAuthentication } from "../../../store/AuthenticationContext";
import { usePerformers } from "../../../store/PerformersContext";

const AddPerformer: React.FC<{}> = () => {
  const nameRef = useRef<HTMLIonInputElement>(null);
  const surnameRef = useRef<HTMLIonInputElement>(null);
  const nickRef = useRef<HTMLIonInputElement>(null);
  const genreRef = useRef<HTMLIonInputElement>(null);
  const imageRef = useRef<HTMLIonInputElement>(null);

  const authentication = useAuthentication();
  const performersContext = usePerformers();

  const [present] = useIonAlert();
  const [showModalAdd, setShowModalAdd] = useState(false);

  function addPerformer() {
    let newPerformer: Performer = {
      id: 0,
      name: nameRef.current!.value! as string,
      surname: surnameRef.current!.value! as string,
      nick: nickRef.current!.value! as string,
      music_genre: genreRef.current!.value! as string,
      image: imageRef.current!.value! as string,
      user_id: authentication.userId!,
    };
    if (
      newPerformer.name == "" ||
      newPerformer.surname == "" ||
      newPerformer.nick == "" ||
      newPerformer.music_genre == "" ||
      newPerformer.image == ""
    ) {
      present(" You must fill all required information.", [{ text: "Ok" }]);
      return;
    }
    console.log(newPerformer);
    performersContext.addPerformer(newPerformer);
    present(
      newPerformer.name + " " + newPerformer.surname + " added successfully",
      [{ text: "Ok" }]
    );
    setShowModalAdd(false);
    return;
  }

  return (
    <IonToolbar color="light">
      <IonModal
        onDidDismiss={() => setShowModalAdd(false)}
        isOpen={showModalAdd}
      >
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
                      ref={nameRef}
                      clearInput
                    ></IonInput>
                  </IonItem>
                  <IonItem>
                    <IonLabel position="floating">Performer surname:</IonLabel>
                    <IonInput
                      type="text"
                      id="addPerformerSurname"
                      name="surname"
                      ref={surnameRef}
                      clearInput
                    ></IonInput>
                  </IonItem>

                  <IonItem>
                    <IonLabel position="floating">Performer nickname:</IonLabel>
                    <IonInput
                      type="text"
                      id="addPerformerNickname"
                      name="nickname"
                      ref={nickRef}
                      clearInput
                    ></IonInput>
                  </IonItem>

                  <IonItem>
                    <IonLabel position="floating">Music genre:</IonLabel>
                    <IonInput
                      type="text"
                      id="addMusicGenre"
                      name="genre"
                      ref={genreRef}
                      clearInput
                    ></IonInput>
                  </IonItem>

                  <IonItem className="addPerformerImg">
                    <IonLabel position="floating">Image:</IonLabel>
                    <IonInput
                      type="text"
                      id="addPerformerImage"
                      ref={imageRef}
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
        <IonButton color="grey" onClick={() => setShowModalAdd(false)}>
          Close{" "}
        </IonButton>
      </IonModal>
      <IonButton
        onClick={() => setShowModalAdd(true)}
        color="grey"
        expand={"block"}
      >
        <IonText>Add new performer</IonText>
        <IonIcon icon={addCircle} className="iconMenu" slot="end"></IonIcon>
      </IonButton>
    </IonToolbar>
  );
};

export default AddPerformer;
