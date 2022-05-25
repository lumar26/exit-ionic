import React, {createContext, useContext, useState} from "react";

const AuthenticationContext = createContext<AuthenticationContextType>({
    userId: 0,
    authenticatedUser: null,
    accessToken: "",
    role: "",
    login: (user: UserAuthenticationResponse) => {
    },
    logout: () => {
    },
})

export const useAuthentication = () => {
    return useContext(AuthenticationContext);
}

type AuthenticationContextType = {
    userId: number | null;
    authenticatedUser: string | null;
    accessToken: string | null;
    role: string | null;
    login: (user: UserAuthenticationResponse) => void;
    logout: () => void;
}

export type UserAuthenticationResponse = {
    username: string;
    jwt: string;
    role: string;
    userId: number;
}

export const AuthenticationProvider: React.FC = (props) => {
    const [username, setUsername] = useState<string | null>(sessionStorage.getItem('currentUser'));
    const [token, setToken] = useState<string | null>(sessionStorage.getItem('currentToken'));
    const [role, setRole] = useState<string | null>(sessionStorage.getItem('currentRole'))
    const [userId, setUserId] = useState<number | null>(+sessionStorage.getItem('currentUserId')!)

    const loginUser = (authResponse: UserAuthenticationResponse) => {
        console.log("login performing")
        console.log(authResponse)
        setUsername(authResponse.username);
        setToken("Bearer " + authResponse.jwt);
        setRole(authResponse.role)
        setUserId(authResponse.userId)
        sessionStorage.setItem('currentUser', authResponse.username);
        sessionStorage.setItem('currentToken', "Bearer " + authResponse.jwt);
        sessionStorage.setItem('currentRole', authResponse.role);
        sessionStorage.setItem('currentUserId', authResponse.userId.toString());
    }

    const logoutUser = () => {
        // check user
        setUsername("");
        setToken("");
        setRole("");
        setUserId(0)
        sessionStorage.removeItem('currentUser');
        sessionStorage.removeItem('currentToken');
        sessionStorage.removeItem('currentUserRole');
        sessionStorage.removeItem('currentUserId');
    }
    const context: AuthenticationContextType = {
        userId: +userId!,
        authenticatedUser: username,
        accessToken: token,
        role: role,
        login: loginUser,
        logout: logoutUser
    }

    return <AuthenticationContext.Provider value={context}>
        {props.children}
    </AuthenticationContext.Provider>
}

export default AuthenticationContext;