import React from "react";
import {IonCard, IonCardContent, IonCardHeader, IonCol, IonIcon, IonImg, IonLabel, IonRow,} from "@ionic/react";
import Performer from "../../model/Performer";
import {logoFacebook, logoInstagram, logoTwitter,} from "ionicons/icons";
import {useAuthentication} from "../../store/AuthenticationContext";
import PerformerCardAdminControls from "./admin/PerformerCardAdminControls";

const PerformerCard: React.FC<{
    performer: Performer;
}> = ({performer}) => {

    const authentication = useAuthentication();

    return (
        <IonCard className="performerCard">
            <IonCardHeader className="picture">
                <IonImg src={performer.image} className="img"></IonImg>
            </IonCardHeader>
            <IonCardContent className="ion-margin-top">
                <IonLabel className="performerNick" color="grey">
                    {performer.nick}
                </IonLabel>
                <br/>
                <IonLabel className="performerName" slot="end">
                    {performer.name} {performer.surname}
                </IonLabel>
                <br/>
                <IonLabel>
                    Genre: {performer.music_genre}
                </IonLabel>

                {authentication.authenticatedUser
                    && authentication.authenticatedUser.role === 'admin'
                    && <PerformerCardAdminControls performer={performer}/>}

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
    );
};

export default PerformerCard;
