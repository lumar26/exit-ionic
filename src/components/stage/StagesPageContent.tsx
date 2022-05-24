import { IonImg } from "@ionic/react";
import React, { useEffect } from "react";
import { useStages } from "../../store/StagesContext";
import StageList from "./StageList";
import AddStageButton from "./admin/AddStageButton";
import { useAuthentication } from "../../store/AuthenticationContext";

const StagesPageContent = () => {
  const stagesContext = useStages();
  const authentication = useAuthentication();

  useEffect(() => {
    stagesContext.getAllStages();
  }, []);

  return (
    <>
      <IonImg src={"/images/stages.jpeg"} className="img" />
      {authentication.authenticatedUser &&
        authentication.role === "ROLE_ADMIN" && <AddStageButton />}
      <StageList stages={stagesContext.stages} />
    </>
  );
};

export default StagesPageContent;
