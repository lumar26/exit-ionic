import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardTitle,
  IonCheckbox,
  IonCol,
  IonGrid,
  IonInput,
  IonItem,
  IonLabel,
  IonRow,
  IonSelect,
  IonSelectOption,
  IonToolbar,
} from "@ionic/react";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Performer from "../../../model/Performer";
import { useAuthentication } from "../../../store/AuthenticationContext";
import { useHistory } from "react-router";
import Stage from "../../../model/Stage";
import { useStages } from "../../../store/StagesContext";
import { usePerformers } from "../../../store/PerformersContext";

const postEventUrl = "http://127.0.0.1:8000/api/events";

const AddEvent: React.FC<{}> = () => {
  const [name, setName] = useState<string>();
  const [start, setStart] = useState<string>();
  const [image, setImage] = useState<string>();
  const [stage, setStage] = useState<Stage>();
  const [performers, setPerformers] = useState<Array<Performer>>();
  const [checked, setChecked] = useState(false);

  const checkboxList = [
    { val: "Pepperoni", isChecked: true },
    { val: "Sausage", isChecked: false },
    { val: "Mushroom", isChecked: false },
  ];

  const authentication = useAuthentication();
  const history = useHistory();

  const stagesContext = useStages();
  const performersContext = usePerformers();

  useEffect(() => {
    stagesContext.getAllStages();
    console.log(stagesContext.stages);

    performersContext.getAllPerformers();
    console.log(performersContext.performers);
  }, []);

  function addEvent() {
    console.log(authentication.authenticatedUser);
    axios
      .post<Event>(postEventUrl, {
        image: image,
        name: name,
        start: start,
        stage: stage,
        performers: performers,

        user_id:
          authentication.authenticatedUser?.id ||
          Math.floor(Math.random() * 10),
      })
      .then((response) => {
        console.log(response.data);
        alert("Event added: " + response.data);
        history.push("/events");
      })
      .catch((error) => alert(error.message));
  }

  return (
    <IonCard>
      <IonCardTitle className="addPerformerTitle">
        <IonToolbar color="grey">Add event</IonToolbar>
      </IonCardTitle>

      <IonCardContent>
        <IonGrid>
          <IonRow>
            <IonCol className="addPerformerCol">
              <IonItem>
                <IonLabel position="floating">Event name:</IonLabel>
                <IonInput
                  type="text"
                  id="addPerformerName"
                  name="name"
                  onIonChange={(e) => setName(e.detail.value!)}
                  clearInput
                ></IonInput>
              </IonItem>
              <IonItem>
                <IonLabel position="floating">Event starts:</IonLabel>
                <IonInput
                  type="text"
                  id="addPerformerSurname"
                  name="start"
                  onIonChange={(e) => setStart(e.detail.value!)}
                  clearInput
                ></IonInput>
              </IonItem>

              <IonItem>
                <IonLabel position="floating">Event stage:</IonLabel>
                <IonSelect
                  name="stage"
                  onIonChange={(e) => setStage(e.detail.value!)}
                >
                  {stagesContext.stages &&
                    stagesContext.stages.map((stage, index) => (
                      <IonSelectOption value={stage.id} key={index}>
                        {stage.name}
                      </IonSelectOption>
                    ))}
                </IonSelect>
              </IonItem>

              {checkboxList.map(({ val, isChecked }, i) => (
                <IonItem key={i}>
                  <IonLabel>{val}</IonLabel>
                  <IonCheckbox
                    color="grey"
                    slot="end"
                    value={val}
                    checked={isChecked}
                  />
                </IonItem>
              ))}

              <IonItem className="addPerformerImg">
                <IonLabel position="floating">Event image:</IonLabel>

                <IonInput
                  type="text"
                  id="addPerformerImage"
                  onIonChange={(e) => setImage(e.detail.value!)}
                  clearInput
                ></IonInput>
              </IonItem>
              <IonButton
                expand="full"
                type="submit"
                onClick={addEvent}
                color="grey"
                className="addPerformerCard"
              >
                Add event
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonCardContent>
    </IonCard>
  );
};

export default AddEvent;
