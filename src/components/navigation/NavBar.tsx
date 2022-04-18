import React from "react";
import {IonContent, IonHeader, IonItem, IonList, IonMenu, IonTitle, IonToolbar} from "@ionic/react";

const NavBar: React.FC = () => {
    const pages = ['Events', 'Stages', 'Performers']
    return (
        <IonMenu side="end" type="push">
            <IonHeader>
                <IonToolbar color="danger">
                    <IonTitle>End Menu</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonList>
                    <IonItem>Menu Item</IonItem>
                    <IonItem>Menu Item</IonItem>
                    <IonItem>Menu Item</IonItem>
                    <IonItem>Menu Item</IonItem>
                    <IonItem>Menu Item</IonItem>
                </IonList>
            </IonContent>
        </IonMenu>
    );
}

export default NavBar;