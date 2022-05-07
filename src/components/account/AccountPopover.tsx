import React, {useState} from 'react';
import {IonButton, IonIcon, IonItem, IonList, IonListHeader, IonPopover} from '@ionic/react';
import {personAddOutline, personCircleOutline, personOutline} from "ionicons/icons";

export const AccountPopover: React.FC = () => {
    const [showPopover, setShowPopover] = useState(false);

    return (
        <>
            <IonPopover
                isOpen={showPopover}
                onDidDismiss={() => setShowPopover(false)}
            >
                <IonList>
                    <IonListHeader>Account</IonListHeader>
                    <IonItem button routerLink={"/login"} onClick={() => setShowPopover(false)}>
                        <IonIcon icon={personOutline}/>
                        Sign in
                    </IonItem>
                    <IonItem  routerLink={"/registration"} onClick={() => setShowPopover(false)}>
                        <IonIcon icon={personAddOutline}/>
                        Sign up
                    </IonItem>
                </IonList>
            </IonPopover>
            <IonButton color={"light"} onClick={() => setShowPopover(true)}>
                <IonIcon icon={personCircleOutline}/>
            </IonButton>
        </>
    );
};