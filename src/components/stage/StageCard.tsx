import React from "react";
import {IonCard, IonCardContent, IonCardHeader, IonIcon, IonImg, IonLabel, IonRow,} from "@ionic/react";
import Stage from "../../model/Stage";
import {cashOutline, locationOutline, peopleOutline} from "ionicons/icons";
import {useAuthentication} from "../../store/AuthenticationContext";
import StageCardAdminControls from "./admin/StageCardAdminControls";

const StageCard: React.FC<{
    stage: Stage;
}> = ({stage}) => {

    const authentication = useAuthentication();
    return (
        <>
            <IonCard className="stageCard">
                <IonCardHeader className="picture">
                    <IonImg src={stage.image} className="img"></IonImg>
                </IonCardHeader>
                <IonCardContent className="stageContent">
                    <br/>
                    <IonLabel className="stageName" color="grey">
                        {stage.name}
                    </IonLabel>

                    {authentication.authenticatedUser
                        && authentication.authenticatedUser.role === 'admin'
                        && <StageCardAdminControls stage={stage}/>}

                </IonCardContent>
                <IonRow className="social" color="red">
                    <IonIcon icon={peopleOutline} className="socialIcon">
                        {" "}
                    </IonIcon>
                    <IonLabel className="stagetabs">{stage.capacity}</IonLabel>
                    <IonIcon icon={cashOutline} className="socialIcon"></IonIcon>
                    <IonLabel className="stagetabs">{stage.sponsor}</IonLabel>
                    <IonIcon icon={locationOutline} className="socialIcon"></IonIcon>{" "}
                    <IonLabel className="stagetabs">{stage.location}</IonLabel>
                </IonRow>
            </IonCard>
        </>
    );
};


export default StageCard;
