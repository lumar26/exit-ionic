import React, {useState} from "react";
import {
    IonButton,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonIcon,
    IonImg,
    IonLabel,
    IonModal,
    IonRow,
    IonText,
    useIonAlert,
} from "@ionic/react";
import Event from "../../model/Event";
import {chatboxEllipsesOutline, closeCircleOutline, locationOutline, peopleOutline,} from "ionicons/icons";
import StageCard from "../stage/StageCard";
import PerformerList from "../performer/PerformerList";
import {useAuthentication} from "../../store/AuthenticationContext";
import EventCardAdminControls from "./admin/EventCardAdminControls";
import CommentSection from "./CommentSection";
import {useComments} from "../../store/CommentsContext";

const EventCard: React.FC<{
    event: Event;
}> = ({event}) => {
    const [showModalStage, setShowModalStage] = useState(false);
    const [showModalPerformers, setShowModalPerformers] = useState(false);
    const [showModalComments, setShowModalComments] = useState(false)
    const [alert] = useIonAlert();

    const authentication = useAuthentication();
    const commentsContext = useComments()

    return (
        <>
            <IonCard className="stageCard">
                <IonImg src={event.image} className="img"/>
                <IonCardHeader className="picture">
                </IonCardHeader>
                <IonCardContent className="stageContent">
                    <br/>
                    <IonLabel className="eventName" color="grey">
                        {event.name}
                    </IonLabel>
                    <IonLabel className="eventStart" color="grey">
                        <b>Starts:</b> {event.start}
                    </IonLabel>

                    {authentication.authenticatedUser
                        && authentication.role === 'ROLE_ADMIN'
                        && <EventCardAdminControls event={event}/>}

                </IonCardContent>
                <IonRow className="social" color="red" id="eventFooter">
                    <IonModal isOpen={showModalPerformers}>
                        <IonButton
                            color="white"
                            size="large"
                            className="buttonCloseModal"
                            slot="end"
                            onClick={() => {
                                setShowModalPerformers(false);
                            }}
                        >
                            <IonIcon icon={closeCircleOutline} slot="end" color="grey"/>
                        </IonButton>
                        <PerformerList performers={event.performers}/>
                    </IonModal>
                    <IonButton
                        onClick={() => {
                            if (!event.performers || event.performers.length === 0) {
                                alert({
                                    cssClass: "styles",
                                    header: "Alert",
                                    message: "No performers added for this event",
                                    buttons: [
                                        "Ok",
                                    ],
                                });
                            } else setShowModalPerformers(true);
                        }}
                        color="grey"
                        expand={'block'}
                    >
                        <IonIcon icon={peopleOutline} className="iconMenu"></IonIcon>
                        <IonText className="eventtabs">Performers</IonText>
                    </IonButton>
                </IonRow>
                <IonRow>
                    <IonModal isOpen={showModalStage}>
                        <IonButton
                            color="white"
                            size="large"
                            className="buttonCloseModal"
                            onClick={() => {
                                setShowModalStage(false);
                            }}
                        >
                            <IonIcon icon={closeCircleOutline} slot="end" color="grey"/>
                        </IonButton>
                        <StageCard stage={event.stage}/>
                    </IonModal>
                    <IonButton onClick={() => setShowModalStage(true)} color="grey" expand={'block'}>
                        <IonIcon icon={locationOutline} className="iconMenu"></IonIcon>
                        <IonText className="eventtabs">{event.stage.name}</IonText>
                    </IonButton>
                </IonRow>
                <IonRow className="commentsBox">
                    <IonModal isOpen={showModalComments}>
                        <CommentSection comments={commentsContext.commentsForCurrentEvent}/>
                        <IonButton
                            color="grey"
                            // className="buttonCloseModal"
                            expand={'block'}
                            onClick={() => {
                                setShowModalComments(false);
                            }}
                        >
                            Close
                        </IonButton>
                    </IonModal>
                    <IonButton
                        onClick={() => {
                            commentsContext.getCommentsForEvent(event)
                            setShowModalComments(true);
                        }}
                        color="grey"
                        expand={'block'}
                    >
                        <IonIcon
                            icon={chatboxEllipsesOutline}
                            className="iconMenu"
                        ></IonIcon>
                        <IonText className="eventtabs"> Comments</IonText>
                    </IonButton>
                </IonRow>
            </IonCard>
        </>
    );
};

export default EventCard;
