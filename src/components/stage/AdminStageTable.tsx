import { useState, useEffect } from "react";
import Stage from "../../model/Stage";
import axios from "axios";
import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonIcon,
  IonLabel,
  IonRow,
  IonToolbar,
  IonText,
  IonModal,
  IonCard,
} from "@ionic/react";
import { addCircle, create, removeCircleOutline, trash } from "ionicons/icons";
import StageCard from "./StageCard";
import UpdateStage from "./UpdateStage";
import { useHistory } from "react-router";
import { useAuthentication } from "../../store/AuthenticationContext";
import AddStage from "./AddStage";

const stagesUrl = "http://localhost:8000/api/stages";

const AdminStageTable = () => {
  const [stages, setStages] = useState<Array<Stage>>([]);
  const [currentStage, setCurrentStage] = useState(stages[0]);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [searchTitle, setSearchTitle] = useState("");
  const [showModalUpdate, setShowModalUpdate] = useState(false);
  const [showModalAdd, setShowModalAdd] = useState(false);

  const authentication = useAuthentication();
  const history = useHistory();

  useEffect(() => {
    retrieveStages();
  }, []);

  const retrieveStages = () => {
    axios.get<Array<Stage>>(stagesUrl).then((response) => {
      console.log("Response after GET stages");
      setStages(response.data);
    });
  };

  const refreshList = () => {
    retrieveStages();
    //setCurrentStage(null);
    setCurrentIndex(-1);
  };

  const setActiveStage = (stage: Stage, index: number) => {
    setCurrentStage(stage);
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

  const deleteStage = (stage: Stage) => {
    console.log(
      "Function deleteStage: " +
        authentication.tokenType +
        " " +
        authentication.accessToken
    );
    console.log("Stage to be deleted: " + stage.id);
    axios
      .delete(`http://localhost:8000/api/stages/${stage.id}`, {
        headers: {
          Authorization:
            authentication.tokenType + " " + authentication.accessToken,
        },
      })
      .then((response) => {
        console.log(response.data);
        refreshList();
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <IonCard>
      <IonToolbar color="grey" className="tableName">
        <IonModal isOpen={showModalAdd}>
          <AddStage></AddStage>
          <IonButton
            color="grey"
            size="default"
            onClick={() => {
              setShowModalAdd(false);
            }}
          >
            Close
          </IonButton>
        </IonModal>
        <IonButton
          onClick={() => setShowModalAdd(true)}
          slot="end"
          color="grey"
        >
          <IonText>Add</IonText>
          <IonIcon icon={addCircle} className="iconMenu" slot="end"></IonIcon>
        </IonButton>
        Stages
      </IonToolbar>
      <IonGrid className="tableGrid">
        <IonRow className="tableRowHeader">
          <IonCol>Name</IonCol>
          <IonCol>Location</IonCol>
          <IonCol>Capacity</IonCol>
          <IonCol>Sponsor</IonCol>
          <IonCol>Actions</IonCol>
        </IonRow>

        {stages &&
          stages.map((stage, index) => (
            <IonRow
              className={
                "list-group-item " + (index === currentIndex ? "active" : "")
              }
              onClick={() => setActiveStage(stage, index)}
              key={index}
              id="tableRow"
            >
              <IonCol className="tableColContent">{stage.name}</IonCol>
              <IonCol className="tableColContent">{stage.location}</IonCol>
              <IonCol className="tableColContent">{stage.capacity}</IonCol>
              <IonCol className="tableColContent">{stage.sponsor}</IonCol>
              <IonCol>
                <IonModal isOpen={showModalUpdate}>
                  <UpdateStage stage={currentStage}></UpdateStage>
                  <IonButton
                    color="grey"
                    size="default"
                    onClick={() => {
                      setActiveStage(stage, index);
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
                    deleteStage(stage);
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
      </IonGrid>
    </IonCard>
  );
};

export default AdminStageTable;
