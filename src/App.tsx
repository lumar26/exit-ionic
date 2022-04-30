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
import AddPerformer from "./components/performer/AddPerformer";
import AddStage from "./components/stage/AddStage";
import Administrator from "./pages/Administrator";
import UpdatePerformer from "./components/performer/UpdatePerformer";

setupIonicReact();

const App: React.FC = () => (

  <IonApp>
    <AuthenticationProvider>
      <IonReactRouter>
        <Menu></Menu>
        <IonRouterOutlet id="main">
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route exact path="/home" component={Home} />
          <Route exact path="/stages" component={StagesPage} />
          <Route exact path="/performers" component={PerformersPage} />
          <Route exact path="/events" component={EventsPage} />
          <Route exact path="/registration" component={Registration} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/contact" component={Contact} />
          <RequiredVisitorAuthentication>
            <>
              <Route exact path="/tickets" component={Tickets} />
            </>
          </RequiredVisitorAuthentication>
          {/*<RequiredAdminAuthentication>*/}
          {/*    <>*/}
          <Route exact path="/performers/add" component={AddPerformer} />
          {/*</>*/}
          {/*</RequiredAdminAuthentication>*/}
          {/*<RequiredAdminAuthentication>*/}
          {/*    <>*/}
          <Route exact path="/stages/add" component={AddStage} />
          {/*</>*/}
          {/*</RequiredAdminAuthentication>*/}

          {/*<RequiredAdminAuthentication>*/}
          {/*    <>*/}
          <Route exact path="/performers/:id" component={UpdatePerformer} />
          {/*</>*/}
          {/*</RequiredAdminAuthentication>*/}

          {/*<RequiredAdminAuthentication>*/}
          {/*    <>*/}
          <Route exact path="/admin" component={Administrator} />
          {/*</>*/}
          {/*</RequiredAdminAuthentication>*/}
        </IonRouterOutlet>
      </IonReactRouter>
    </AuthenticationProvider>
  </IonApp>
);

export default App;
