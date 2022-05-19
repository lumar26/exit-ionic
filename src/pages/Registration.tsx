import {
    IonButton,
    IonContent,
    IonHeader,
    IonImg,
    IonInput,
    IonItem,
    IonLabel,
    IonList,
    IonPage,
    IonRouterLink,
} from "@ionic/react";
import React, {useState} from "react";
import NavBar from "../components/navigation/NavBar";
import User from "../model/User";
import axios from 'axios';
import {useAuthentication, UserAuthenticationResponse} from "../store/AuthenticationContext";
import {useHistory} from "react-router";

const defaultRole = "visitor"; //admini su upanpred registrovani, tako da neko ko se sam registruje može da bude samo sa ulogom visitor
const registerUrl = "http://localhost:8000/auth/register";

const Registration: React.FC = () => {
    const [firstname, setFirstname] = useState<string>("");
    const [lastname, setLastname] = useState<string>("");
    const [userEmail, setUserEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const authentication = useAuthentication();
    const history = useHistory();

    function register() {
        const user: User = {
            name: firstname + " " + lastname,
            email: userEmail,
            username: userEmail,
            password: password,
            role: defaultRole
        }
        axios.post<UserAuthenticationResponse>(registerUrl, user, {headers: {'Content-Type': "application/json"}})
            .then(function (response) {
                console.log(response.data)
                authentication.login(response.data)
                history.push("/home");
            })
            .catch(function (error) {
                console.log(error);
                // todo: show error to user
            });
    }

    return (
        <IonPage>
            <IonHeader>
                <NavBar/>
            </IonHeader>

            <IonContent fullscreen>
                <IonImg src={"/images/registration.jpeg"} className="imgTop"></IonImg>

                <IonList className="registrationForm" color="grey">
                    <IonItem className="registrationFormInput">
                        <IonLabel position="floating">Name</IonLabel>
                        <IonInput
                            value={firstname}
                            onIonChange={(e) => setFirstname(e.detail.value!)}
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
                            value={userEmail}
                            onIonChange={(e) => setUserEmail(e.detail.value!)}
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
