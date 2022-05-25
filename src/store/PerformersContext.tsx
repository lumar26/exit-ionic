import Performer from "../model/Performer";
import React, {createContext, useContext, useState} from "react";
import {useAuthentication} from "./AuthenticationContext";
import {addPerformerApi, deletePerformerApi, getAllPerformersApi, updatePerformerApi} from "../api/performersApi";

type PerformersContextType = {
    performers: Array<Performer>;
    selectedPerformer: Performer | null | undefined;
    addPerformer: (performer: Performer) => Promise<void> | null;
    deletePerformer: (performer: Performer) => Promise<void> | null
    updatePerformer: (performer: Performer, id: number) => Promise<void> | null
    getAllPerformers: () => void
    selectPerformer: ((performer: Performer) => void)
}

const PerformersContext = createContext<PerformersContextType>({
        performers: [],
        selectedPerformer:undefined,
        addPerformer: () => null,
        updatePerformer: () => null,
        deletePerformer: () => null,
        getAllPerformers: () => {
        },
        selectPerformer: () => {
        }
    }
);

export const usePerformers = () => {
    return useContext(PerformersContext)
}

export const PerformersProvider: React.FC = (props) => {
    const authentication = useAuthentication();

    const requestConfig: any = {
        headers: {
            'Authorization': authentication.accessToken as string
        }
    }

    const [performers, setPerformers] = useState<Array<Performer>>();
    const [selectedPerformer, setSelectedPerformer] = useState<Performer | null>();

    const selectPerformer = (performer: Performer) => {
        setSelectedPerformer(performer);
    }

    const getAllPerformers = () => {
        getAllPerformersApi(requestConfig)
            .then(performers => setPerformers(performers))
            .catch(error => {
                console.log(error)
                setPerformers([]);
            })
    };

    const addPerformer = (performer: Performer): Promise<void> => {
        return addPerformerApi(performer, requestConfig)
            .then(addedPerformer => {
                setPerformers(performers!.concat(addedPerformer))
            })
    }

    const updatePerformer = (performer: Performer, id: number): Promise<void> => {

        return updatePerformerApi(performer, id, requestConfig)
            .then(updatedPerformer => {
                let oldPerformer = performers?.find(performer => performer.id === id)
                if (!oldPerformer) {
                    setPerformers(performers!.concat(updatedPerformer))
                } else {
                    // updating fields manually
                    oldPerformer.name = updatedPerformer.name;
                    oldPerformer.nick = updatedPerformer.nick;
                    oldPerformer.surname = updatedPerformer.surname;
                    oldPerformer.genre = updatedPerformer.genre;
                    oldPerformer.image = updatedPerformer.image;
                //    todo
                }
            })
    }

    const deletePerformer = (performer: Performer): Promise<void> => {
        return deletePerformerApi(performer, requestConfig)
            .then(deletedPerformer => setPerformers(performers?.filter(performer => performer.id !== deletedPerformer.id)))
    };

    const context: PerformersContextType = {
        performers: performers!,
        selectedPerformer: selectedPerformer,
        getAllPerformers: getAllPerformers,
        addPerformer: addPerformer,
        deletePerformer: deletePerformer,
        updatePerformer: updatePerformer,
        selectPerformer: selectPerformer
    }

    return <PerformersContext.Provider value={context}>
        {props.children}
    </PerformersContext.Provider>
}

