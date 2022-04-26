import React, {createContext, useContext, useState} from "react";
import User from "../model/User";

const AuthenticationContext = createContext<AuthenticationContextType>({
    // loggedUser: undefined,
    authenticatedUser: null,
    accessToken: "",
    tokenType: "",
    login: (user: UserAuthenticationResponse) => {
    },
    logout: (user: UserAuthenticationResponse) => {
    },
})

export const useAuthentication = () => {
    return useContext(AuthenticationContext);
}

type AuthenticationContextType = {
    authenticatedUser: User | null;
    accessToken: string;
    tokenType: string;
    login: (user: UserAuthenticationResponse) => void;
    logout: (user: UserAuthenticationResponse) => void;
}

export type UserAuthenticationResponse = {
    user: User;
    accessToken: string;
    tokenType: string;
}

export const AuthenticationProvider: React.FC = (props) => {
    const [user, setUser] = useState<User | null>(null);
    const [token, setToken] = useState<string>("");
    const [tokenType, setTokenType] = useState<string>("");

    const loginUser = (user: UserAuthenticationResponse) => {
        setUser(user.user);
        setToken(user.accessToken);
        setTokenType(user.tokenType);
    }

    const logoutUser = (user: UserAuthenticationResponse) => {
        // check user
        setUser(null);
        setToken("");
        setTokenType("");
    }
    const context: AuthenticationContextType = {
        authenticatedUser: user,
        accessToken: token,
        tokenType: tokenType,
        login: loginUser,
        logout: logoutUser
    }


    return <AuthenticationContext.Provider value={context}>
        {props.children}
    </AuthenticationContext.Provider>
}

export default AuthenticationContext;