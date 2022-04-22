import React, {useState} from "react";
import {createContext} from "react";
import User from "../model/User";

const UserContext = createContext({
    // loggedUser: undefined,
    accessToken: "",
    tokenType: "",
    loginUser: (user: UserAuthResponse) => {},
    logoutUser: (user: UserAuthResponse) => {},
})

export type UserAuthResponse = {
    userInfo: User;
    accessToken: string;
    tokenType: string;
}

export const AuthContextProvider : React.FC= (props) => {
    const [user, setUser] = useState<User>();
    const [token, setToken] = useState<string>("");
    const [tknType, setTknType] = useState<string>("");

    const loginUser = (usr: UserAuthResponse) => {
        setUser(usr.userInfo);
        setToken(usr.accessToken);
        setTknType(usr.tokenType);
        console.log("user logged in: " + user + ", with token: " + token)

    }
    const logoutUser = (user: UserAuthResponse) => {
        // check user
        console.log("use logged out: " + user)
        setUser(undefined);
        setToken("");
        setTknType("");
    }
    const context = {
        loggedUser: user,
        accessToken: token,
        tokenType: tknType,
        loginUser: loginUser,
        logoutUser: logoutUser
    }


    return <UserContext.Provider value={context}>
        {props.children}
    </UserContext.Provider>
}

export default UserContext;