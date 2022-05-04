import React, { useEffect, useState } from "react";
import { IonContent, IonHeader, IonImg, IonPage } from "@ionic/react";
import axios from "axios";
import Stage from "../model/Stage";
import StageList from "../components/stage/StageList";
import NavBar from "../components/navigation/NavBar";

const stagesUrl = "http://localhost:8000/api/stages";

const StagesPage: React.FC = () => {
  const [stages, setStages] = useState<Array<Stage>>([]);

  useEffect(() => {
    axios.get<Array<Stage>>(stagesUrl).then((response) => {
      setStages(response.data);
      console.log("Response after GET stages");
      console.log(response.data);
    });
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <NavBar />
      </IonHeader>
      <IonContent>
        <IonImg src={"/images/stages.jpeg"} className="img"></IonImg>
        <StageList stages={stages} />
      </IonContent>
    </IonPage>
  );
};

export default StagesPage;
