import Performer from "../model/Performer";
import React, {createContext, useContext, useState} from "react";
import {useAuthentication} from "./AuthenticationContext";
import {addPerformerApi, deletePerformerApi, getAllPerformersApi, updatePerformerApi} from "../api/performersApi";

type PerformersContextType = {
    performers: Array<Performer>;
    selectedPerformer: Performer | null | undefined;
    addPerformer: ((performer: Performer) => void);
    deletePerformer: ((performer: Performer) => void)
    updatePerformer: ((performer: Performer, id: number) => void)
    getAllPerformers: () => void
    selectPerformer: ((performer: Performer) => void)
}

const PerformersContext = createContext<PerformersContextType>({
        performers: [],
        selectedPerformer: null,
        addPerformer: () => {
        },
        updatePerformer: () => {
        },
        deletePerformer: () => {
        },
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

    const addPerformer = (performer: Performer) => {
        addPerformerApi(performer, requestConfig)
            .then(addedPerformer => {
                performers!.push(addedPerformer)
                setPerformers(performers)
            })
            .catch(error => console.log(error));
    }

    const updatePerformer = (performer: Performer, id: number) => {

        updatePerformerApi(performer, id, requestConfig)
            .then(updatedPerformer => {
                let oldPerformer = performers?.find(performer => performer.id === id)
                if (!oldPerformer) {
                    performers?.push(updatedPerformer)
                } else {
                    // updating fields manually
                    oldPerformer.name = updatedPerformer.name;
                    oldPerformer.nick = updatedPerformer.nick;
                    oldPerformer.surname = updatedPerformer.surname;
                    oldPerformer.music_genre = updatedPerformer.music_genre;
                    oldPerformer.image = updatedPerformer.image;
                }
                setPerformers(performers)
            })
            .catch(error => console.log(error));
    }

    const deletePerformer = (performer: Performer) => {
        deletePerformerApi(performer, requestConfig)
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

