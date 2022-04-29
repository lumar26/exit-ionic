import {Redirect, Route} from "react-router-dom";
import {IonApp, IonRouterOutlet, setupIonicReact} from "@ionic/react";
import {IonReactRouter} from "@ionic/react-router";
import Home from "./pages/Home";
import Menu from "./components/navigation/Menu";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import Tickets from "./pages/Tickets";
import Contact from "./pages/Contact";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import "./theme/styles.css";
import React from "react";
import StagesPage from "./pages/StagesPage";
import EventsPage from "./pages/EventsPage";
import PerformersPage from "./pages/PerformersPage";
import {AuthenticationProvider} from "./store/AuthenticationContext";
import {RequiredVisitorAuthentication} from "./authentication/RequireVisitorAuthentication";
import {RequiredAdminAuthentication} from "./authentication/RequireAdminAuthentication";
import AddPerformer from "./components/performer/AddPerformer";

setupIonicReact();

const App: React.FC = () => (
    <IonApp>
        <AuthenticationProvider>
            <IonReactRouter>
                <Menu></Menu>
                <IonRouterOutlet id="main">
                    <Route exact path="/">
                        <Redirect to="/home"/>
                    </Route>
                    <Route exact path="/home" component={Home}/>
                    <Route exact path="/stages" component={StagesPage}/>
                    <Route exact path="/performers" component={PerformersPage}/>
                    <Route exact path="/events" component={EventsPage}/>
                    <Route exact path="/registration" component={Registration}/>
                    <Route exact path="/login" component={Login}/>
                    <RequiredVisitorAuthentication>
                        <>
                            <Route exact path="/tickets" component={Tickets} />
                            <Route exact path="/contact" component={Contact} />
                        </>
                    </RequiredVisitorAuthentication>
                    {/*<RequiredAdminAuthentication>*/}
                    {/*    <>*/}
                            <Route exact path="/performers/add" component={AddPerformer} />
                        {/*</>*/}
                    {/*</RequiredAdminAuthentication>*/}

                </IonRouterOutlet>
            </IonReactRouter>
        </AuthenticationProvider>
    </IonApp>
);

export default App;
