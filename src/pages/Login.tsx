import {
    IonButton,
    IonCol,
    IonContent,
    IonGrid,
    IonHeader,
    IonImg,
    IonInput,
    IonItem,
    IonLabel,
    IonList,
    IonPage,
    IonRow,
} from "@ionic/react";
import React, {useContext, useState} from "react";
import NavBar from "../components/navigation/NavBar";
import axios from "axios";
import userContext, {UserAuthenticationResponse} from "../store/AuthenticationContext";

const loginUrl = "http://127.0.0.1:8000/api/login";

type UserLoginRequest = {
    email: string;
    password: string;
}

const Login: React.FC = () => {
    const [username, setUsername] = useState<string>();
    const [password, setPassword] = useState<string>();

    const context = useContext(userContext);

    function login() {
        axios.create()
        axios.post<UserAuthenticationResponse>(loginUrl, {
            email: username,
            password: password
        }, {
            headers: {'Content-Type': 'application/json'}
        })
            .then(response => {
                context.login(response.data)
                console.log("User logged in: " + response.data)
            })
            .catch(error => console.log(error))
    }

    return (
        <IonPage>
            <IonHeader>
                <NavBar/>
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
