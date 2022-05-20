import axios from "axios";
import Stage from "../model/Stage";

const apiUrl = "http://localhost:8080/api/stages"

export const getStageByIdApi = (id: number, requestConfig: any) => {
    return axios.get<Stage>(`${apiUrl}/${id}`, requestConfig)
        .then(response => {
            if (response.status !== 200)
                throw new Error("Could not fetch stage with id: " + id);
            return response.data
        }).catch(error => {
            throw error;
        })
}

export const getAllStagesApi = (requestConfig: any) => {
    return axios.get<Array<Stage>>(apiUrl, requestConfig)
        .then((response) => {
            return response.data;
        })
        .catch(error => {
            throw error;
        });
};

export const addStageApi = (stage: Stage, requestConfig: any) => {
    return axios
        .post<Stage>(apiUrl, stage, requestConfig)
        .then((response) => {
            if (response.status !== 200)
                throw new Error("Could not add new stage: " + response.data);
            return response.data;
        })
        .catch(error => {
            throw error;
        });
}

export const updateStageApi = (stage: Stage, id: number, requestConfig: any) => {
    return axios
        .put<Stage>(`${apiUrl}/${id}`, stage, requestConfig)
        .then((response) => {
            if (response.status !== 200)
                throw new Error("Could not update stage: " + stage.name);
            return response.data;
        })
        .catch(error => {
            throw error
        });
}

export const deleteStageApi = (stage: Stage, requestConfig: any) => {
    return axios
        .delete<Stage>(`${apiUrl}/${stage.id}`, requestConfig)
        .then((response) => {
            if (response.status !== 200)
                throw new Error("Could not delete stage: " + stage.name);
            return response.data;
        })
        .catch(error => {
            throw error;
        });
};
