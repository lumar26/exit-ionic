import React, {useEffect, useState} from "react";
import {IonContent, IonHeader, IonPage} from "@ionic/react";
import axios from "axios";
import Performer from "../model/Performer";
import PerformerList from "../components/performer/PerformerList";

const performersUrl = "http://localhost:8000/api/performers";

const PerformersPage: React.FC = () => {

    const [performers, setPerformers] = useState<Array<Performer>>([]);

    useEffect(() => {
        axios.get<Array<Performer>>(performersUrl)
            .then(response => {
                console.log('Response after GET performers');
                setPerformers(response.data)
            });
    }, []);


    return (
        <IonPage>
            <IonHeader>
                {/*    ovde ide toolbar*/}
            </IonHeader>
            <IonContent>
                <PerformerList performers={performers}/>
            </IonContent>
        </IonPage>
    );
}

export default PerformersPage;