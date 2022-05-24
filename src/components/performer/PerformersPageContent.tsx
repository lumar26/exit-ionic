import { IonImg } from "@ionic/react";
import React, { useEffect } from "react";
import PerformerList from "./PerformerList";
import { usePerformers } from "../../store/PerformersContext";
import AddPerformer from "./admin/AddPerformer";
import { useAuthentication } from "../../store/AuthenticationContext";

const PerformersPageContent = () => {
  const performersContext = usePerformers();
  const authentication = useAuthentication();

  useEffect(() => {
    performersContext.getAllPerformers();
  }, []);

  return (
    <>
      <IonImg src={"/images/performers.jpeg"} className="img"></IonImg>
      {authentication.authenticatedUser &&
        authentication.role === "ROLE_ADMIN" && <AddPerformer />}
      <PerformerList performers={performersContext.performers} />
    </>
  );
};

export default PerformersPageContent;
