import {IonImg} from "@ionic/react";
import React, {useEffect} from "react";
import PerformerList from "./PerformerList";
import {usePerformers} from "../../store/PerformersContext";

const PerformersPageContent = () => {
    const performersContext = usePerformers();

    useEffect(() => {
        performersContext.getAllPerformers();
    }, []);

    return (
        <>
            <IonImg src={"/images/performers.jpeg"} className="img"></IonImg>
            <PerformerList performers={performersContext.performers}/>
        </>
    );
}

export default PerformersPageContent;