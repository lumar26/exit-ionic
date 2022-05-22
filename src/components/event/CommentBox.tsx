import React from "react";
import {IonCard, IonCardContent, IonCardHeader, IonCol, IonIcon, IonRow, IonText,} from "@ionic/react";
import {personOutline, time} from "ionicons/icons";

const CommentBox: React.FC<{}> = () => {
  return (
    <>
      <IonCard className="commentCard">
        <IonCardHeader className="commentHeader">
          <IonIcon className="commentUser" icon={personOutline}></IonIcon>
        </IonCardHeader>
        <IonCardContent className="commentContent">
          <IonRow className="commentInfo">
            <IonCol size="6" className="commentName">
              <IonText>Ravi Sah</IonText>
            </IonCol>
            <IonCol size="7" className="commentTime">
              <IonIcon icon={time} id="timeIconComm"></IonIcon>
              May 27, 2015
            </IonCol>
          </IonRow>

          <IonText className="commentText">
            Pellentesque gravida tristique ultrices. Sed blandit varius mauris,
            vel volutpat urna hendrerit id. Curabitur rutrum dolor gravida
            turpis tristique efficitur.
          </IonText>
        </IonCardContent>
      </IonCard>
    </>
  );
};

export default CommentBox;
