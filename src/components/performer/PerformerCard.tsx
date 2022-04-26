import React from "react";
import {
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
    IonCol,
    IonIcon,
    IonImg,
    IonItem,
    IonLabel,
    IonRow,
} from "@ionic/react";
import Performer from "../../model/Performer";
import {logoFacebook, logoInstagram, logoTwitter,} from "ionicons/icons";

const PerformerCard: React.FC<{
    performer: Performer;
}> = ({performer}) => {
    return (
        <>
            <IonCard className="performerCard">
                <IonCardHeader className="picture">
                    <IonImg src={performer.image} className="img"></IonImg>
                </IonCardHeader>
                <IonCardContent className="performerContent">
                    <IonLabel className="performerName" color="grey">
                        {performer.name} {performer.surname}
                    </IonLabel>
                    <br/>
                    <IonLabel className="perforemerNick" slot="end">
                        {performer.nick}
                    </IonLabel>
                    <br/>
                    <IonLabel className="PerformerGenre">
                        Genre: {performer.music_genre}
                    </IonLabel>
                </IonCardContent>
                <IonRow className="social" color="red">
                    <IonCol>
                        <IonIcon icon={logoFacebook} className="socialIcon"></IonIcon>
                    </IonCol>
                    <IonCol className="socialIcon">
                        <IonIcon icon={logoInstagram} className="socialIcon"></IonIcon>
                    </IonCol>
                    <IonCol>
                        <IonIcon icon={logoTwitter} className="socialIcon"></IonIcon>
                    </IonCol>
                </IonRow>
            </IonCard>
        </>
    );
};

export default PerformerCard;
