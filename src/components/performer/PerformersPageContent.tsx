import {IonImg} from "@ionic/react";
import React, {useEffect} from "react";
import PerformerList from "./PerformerList";
import {usePerformers} from "../../store/PerformersContext";
import AddPerformerButton from "./admin/AddPerformerButton";
import {useAuthentication} from "../../store/AuthenticationContext";
import {useError} from "../../store/ErrorContext";
import ErrorNotification from "../error/ErrorNotification";

const PerformersPageContent = () => {
    const performersContext = usePerformers();
    const authentication = useAuthentication();
    const {error} = useError()

    useEffect(() => {
        performersContext.getAllPerformers();
    }, []);

    return (
        <>
            {error && <ErrorNotification/>}
            <IonImg src={"/images/performers.jpeg"} className="img"></IonImg>
            {authentication.authenticatedUser &&
                authentication.role === "ROLE_ADMIN" && <AddPerformerButton/>}
            <PerformerList performers={performersContext.performers}/>
        </>
    );
};

export default PerformersPageContent;
