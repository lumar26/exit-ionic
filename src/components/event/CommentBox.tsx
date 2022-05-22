import React from "react";
import {IonCard, IonCardContent, IonCardHeader, IonCol, IonIcon, IonRow, IonText,} from "@ionic/react";
import {personOutline, time} from "ionicons/icons";
import Comment from "../../model/Comment";

const CommentBox: React.FC<{ comment: Comment }> = ({comment}) => {
    return (
        <IonCard className="commentCard">
            <IonCardHeader className="commentHeader">
                <IonIcon className="commentUser" icon={personOutline}></IonIcon>
            </IonCardHeader>
            <IonCardContent className="commentContent">
                <IonRow className="commentInfo">
                    <IonCol size="6" className="commentName">
                        <IonText>Rate: {comment.rate}</IonText>
                    </IonCol>
                    <IonCol size="7" className="commentTime">
                        <IonIcon icon={time} id="timeIconComm"></IonIcon>
                        May 27, 2015
                    </IonCol>
                </IonRow>

                <IonText className="commentText">
                    {comment.content}
                </IonText>
            </IonCardContent>
        </IonCard>
    );
};

export default CommentBox;
