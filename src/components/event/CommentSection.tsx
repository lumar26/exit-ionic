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
import Comment from "../../model/Comment";

const CommentSection: React.FC<{ comments: Comment[] }> = ({comments}) => {
    const [rate, setRate] = useState(0);

    return (
        <div className="comments">
            <IonRow className="commentsHeader">
                <IonText className="comments-title">Comments ({comments.length})</IonText>
                {comments.map(comment => {
                    return (
                        <CommentBox key={comment.id} comment={comment}/>
                    );
                })}
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
                                <IonLabel key={index}>
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
