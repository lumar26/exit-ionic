import {IonButton, IonIcon, IonText} from "@ionic/react";
import {addCircle} from "ionicons/icons";
import React from "react";
import {useHistory} from "react-router-dom";

const AddEventButton = () => {
    const history = useHistory();

    return (
        <IonButton
            onClick={() => history.push("/events/add")}
            color="grey"
            expand={'block'}
        >
            <IonText>Add new event</IonText>
            <IonIcon icon={addCircle} className="iconMenu" slot="end"></IonIcon>
        </IonButton>
    );
}

export default AddEventButton;