import {
  IonContent,
  IonHeader,
  IonPage,
  IonImg,
  IonItem,
  IonLabel,
  IonInput,
  IonList,
  IonButton,
  IonRouterLink,
} from "@ionic/react";
import React, { useState } from "react";
import NavBar from "../components/navigation/NavBar";

const Registration: React.FC = () => {
  const [name, setName] = useState<string>();
  const [lastname, setLastname] = useState<string>();
  const [username, setUsername] = useState<string>();
  const [password, setPassword] = useState<string>();

  function register() {
    console.log("Register button clicked.");
  }

  return (
    <IonPage>
      <IonHeader>
        <NavBar />
      </IonHeader>

      <IonContent fullscreen>
        <IonImg src={"/images/registration.jpeg"} className="imgTop"></IonImg>

        <IonList className="registrationForm" color="grey">
          <IonItem className="registrationFormInput">
            <IonLabel position="floating">Name</IonLabel>
            <IonInput
              value={name}
              onIonChange={(e) => setName(e.detail.value!)}
              clearInput
              color="success"
            ></IonInput>
          </IonItem>
          <IonItem className="registrationFormInput">
            <IonLabel position="floating">Lastname</IonLabel>
            <IonInput
              value={lastname}
              onIonChange={(e) => setLastname(e.detail.value!)}
              clearInput
            ></IonInput>
          </IonItem>
          <IonItem className="registrationFormInput">
            <IonLabel position="floating">Username</IonLabel>
            <IonInput
              value={username}
              onIonChange={(e) => setUsername(e.detail.value!)}
              clearInput
            ></IonInput>
          </IonItem>
          <IonItem className="registrationFormInput">
            <IonLabel position="floating">Password</IonLabel>
            <IonInput
              type="password"
              value={password}
              onIonChange={(e) => setPassword(e.detail.value!)}
            ></IonInput>
          </IonItem>

          <IonButton color="grey" id="registerBtn" onClick={register}>
            Register!
          </IonButton>
          <IonRouterLink href={"/login"} id="registerLabel">
            Already have an account?
          </IonRouterLink>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Registration;
