import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonImg,
  IonItem,
  IonLabel,
  IonInput,
  IonList,
  IonButton,
  IonRouterLink,
  IonGrid,
  IonRow,
  IonCol,
} from "@ionic/react";
import React, { useState } from "react";
import NavBar from "../components/navigation/NavBar";

const Login: React.FC = () => {
  const [username, setUsername] = useState<string>();
  const [password, setPassword] = useState<string>();

  function login() {
    console.log("Login button clicked.");
  }

  return (
    <IonPage>
      <IonHeader>
        <NavBar />
      </IonHeader>
      <IonContent fullscreen>
        <IonImg src={"/images/login.jpeg"} className="imgTop"></IonImg>

        <IonGrid>
          <IonRow className="loginForm">
            <IonCol text-center color="grey">
              <IonList>
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

                <IonButton color="grey" id="loginBtn" onClick={login}>
                  Login!
                </IonButton>
              </IonList>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Login;
