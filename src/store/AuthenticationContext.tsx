import React, {createContext, useContext, useEffect, useState} from "react";
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
    accessToken: string | null;
    tokenType: string | null;
    login: (user: UserAuthenticationResponse) => void;
    logout: (user: UserAuthenticationResponse) => void;
}

export type UserAuthenticationResponse = {
    user: User;
    accessToken: string;
    tokenType: string;
}

export const AuthenticationProvider: React.FC = (props) => {
    const [user, setUser] = useState<User | null>(JSON.parse(localStorage.getItem('currentUser')!));
    const [token, setToken] = useState<string | null>(localStorage.getItem('currentToken'));
    const [tokenType, setTokenType] = useState<string | null>(localStorage.getItem('currentTokenType'));

    const loginUser = (user: UserAuthenticationResponse) => {
        setUser(user.user);
        setToken(user.accessToken);
        setTokenType(user.tokenType);
        localStorage.setItem('currentUser', JSON.stringify(user.user));
        localStorage.setItem('currentToken', user.accessToken);
        localStorage.setItem('currentTokenType', user.tokenType);
    }

    const logoutUser = (user: UserAuthenticationResponse) => {
        // check user
        setUser(null);
        setToken("");
        setTokenType("");
        localStorage.removeItem('currentUser');
        localStorage.removeItem('currentToken');
        localStorage.removeItem('currentTokenType');

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