import React from "react";
import {Redirect} from "react-router-dom";
import {useAuthentication} from "../store/AuthenticationContext";

export const RequiredAdminAuthentication: React.FC<{ children: JSX.Element }> = ({children}) => {
    const auth = useAuthentication();

    if (!auth.authenticatedUser || auth.authenticatedUser.role !== 'admin')
        return <Redirect to="/login"/>
    return children;
}