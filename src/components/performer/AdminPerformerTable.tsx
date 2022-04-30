import React, { useState, useEffect, useRef } from "react";
import Performer from "../../model/Performer";
import axios from "axios";
import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonIcon,
  IonLabel,
  IonRow,
  IonTitle,
  IonToolbar,
  IonItem,
  IonText,
  useIonModal,
  IonPage,
  IonModal,
} from "@ionic/react";
import { addCircle, create, removeCircleOutline, trash } from "ionicons/icons";
import PerformerCard from "./PerformerCard";
import UpdatePerformer from "./UpdatePerformer";
import { Redirect, useHistory } from "react-router";
import { Link } from "react-router-dom";

const performersUrl = "http://localhost:8000/api/performers";

const TutorialsList = () => {
  const [performers, setPerformers] = useState<Array<Performer>>([]);
  const [currentPerformer, setCurrentPerformer] = useState(performers[0]);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [searchTitle, setSearchTitle] = useState("");

  const [showModalUpdate, setShowModalUpdate] = useState(false);
  const history = useHistory();

  useEffect(() => {
    retrievePerformers();
  }, []);

  const retrievePerformers = () => {
    axios.get<Array<Performer>>(performersUrl).then((response) => {
      console.log("Response after GET performers");
      setPerformers(response.data);
    });
  };

  const refreshList = () => {
    retrievePerformers();
    //setCurrentPerformer(null);
    setCurrentIndex(-1);
  };

  const setActivePerformer = (performer: Performer, index: number) => {
    setCurrentPerformer(performer);
    setCurrentIndex(index);
  };

  /*
  const findByTitle = () => {
    TutorialDataService.findByTitle(searchTitle)
      .then(response => {
        setTutorials(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };*/

  const deletePerformer = (p: Performer) => {
    axios
      .delete(`/performers/${p.id}`)
      .then((response) => {
        console.log(response.data);
        refreshList();
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <IonContent>
      <IonToolbar color="grey" className="tableName">
        Performers
        <IonButton
          onClick={(e) => {
            e.preventDefault();
            history.push("/performers/add");
          }}
          slot="end"
          color="grey"
        >
          <IonText>Add</IonText>
          <IonIcon icon={addCircle} className="iconMenu" slot="end"></IonIcon>
        </IonButton>
      </IonToolbar>
      <IonGrid className="tableGrid">
        <IonRow className="tableRowHeader">
          <IonCol>Name</IonCol>
          <IonCol>Lastname</IonCol>
          <IonCol>Nickname</IonCol>
          <IonCol>Actions</IonCol>
        </IonRow>

        {performers &&
          performers.map((performer, index) => (
            <IonRow
              className={
                "list-group-item " + (index === currentIndex ? "active" : "")
              }
              onClick={() => setActivePerformer(performer, index)}
              key={index}
              id="tableRow"
            >
              <IonCol className="tableColContent">{performer.name}</IonCol>
              <IonCol className="tableColContent">{performer.surname}</IonCol>
              <IonCol className="tableColContent">{performer.nick}</IonCol>
              <IonCol>
                <IonModal isOpen={showModalUpdate}>
                  <UpdatePerformer
                    performer={currentPerformer}
                  ></UpdatePerformer>
                  <IonButton
                    color="grey"
                    size="default"
                    onClick={() => {
                      setActivePerformer(performer, index);
                      setShowModalUpdate(false);
                    }}
                  >
                    Close
                  </IonButton>
                </IonModal>
                <IonButton
                  onClick={() => setShowModalUpdate(true)}
                  color="light"
                >
                  <IonIcon
                    icon={create}
                    className="tableIcon"
                    color="grey"
                    size="large"
                  ></IonIcon>
                </IonButton>
                <IonButton
                  color="red"
                  onClick={() => {
                    deletePerformer(performer);
                  }}
                >
                  <IonIcon
                    icon={trash}
                    className="tableIcon"
                    size="large"
                  ></IonIcon>
                </IonButton>
              </IonCol>
            </IonRow>
          ))}
        <IonRow id="currentPerformer">
          {currentPerformer ? (
            <PerformerCard performer={currentPerformer} />
          ) : (
            <IonLabel>
              <br></br>Select performer for more information.
            </IonLabel>
          )}
        </IonRow>
      </IonGrid>
    </IonContent>
  );
};

export default TutorialsList;
