import React, {useState} from "react";
import {
  IonButton,
  IonCol,
  IonGrid,
  IonIcon,
  IonInput,
  IonLabel,
  IonRadio,
  IonRadioGroup,
  IonRow,
  IonText,
} from "@ionic/react";
import CommentBox from "./CommentBox";
import {star} from "ionicons/icons";

const CommentSection: React.FC<{}> = () => {
  const [content, setContent] = useState("");
  const [rate, setRate] = useState(0);

  return (
    <div className="comments">
      <IonRow className="commentsHeader">
        <IonText className="comments-title">Comments (3)</IonText>
        <CommentBox></CommentBox>
        <CommentBox></CommentBox>
      </IonRow>

      <IonGrid className="addComment">
        <IonText className="comments-title">Write a comment</IonText>
        <IonRow className="row">
          <IonCol>
            <IonInput
              className="addCommentInput"
              placeholder="Your comment"
            ></IonInput>
          </IonCol>
        </IonRow>
        <IonRow className="commentRate">
          <IonRadioGroup>
            {[...Array(5)].map((item, index) => {
              const givenRating = index + 1;
              return (
                <IonLabel>
                  <IonRadio
                    id="starRadio"
                    value={givenRating}
                    onClick={() => {
                      setRate(givenRating);
                      alert(
                        `Are you sure you want to give ${givenRating} stars ?`
                      );
                    }}
                  />
                  <IonIcon
                    id="stars"
                    icon={star}
                    color={
                      givenRating < rate || givenRating === rate
                        ? "red"
                        : "grey"
                    }
                  />
                </IonLabel>
              );
            })}
          </IonRadioGroup>
        </IonRow>

        <IonButton color="grey">Add comment</IonButton>
      </IonGrid>
    </div>
  );
};

export default CommentSection;
