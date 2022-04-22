import React, { useEffect } from "react";
import {
  IonButton,
  IonButtons,
  IonCol,
  IonIcon,
  IonMenuButton,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import {
  logoFacebook,
  logoTwitter,
  logoYoutube,
  logoInstagram,
  logoTiktok,
  logoWhatsapp,
  personCircleOutline,
} from "ionicons/icons";

const NavBar: React.FC = () => {
  const [mQuery, setMQuery] = React.useState<any>({
    matches: window.innerWidth > 760 ? true : false,
  });

  useEffect(() => {
    let mediaQuery = window.matchMedia("(min-width: 760px)");
    mediaQuery.addListener(setMQuery);

    return () => mediaQuery.removeListener(setMQuery);
  }, []);

  return (
    <div>
      <IonToolbar color="gradient" className="toolbarSocial">
        <IonRow slot="end">
          <IonIcon icon={logoFacebook} className="socialIcon"></IonIcon>
          <IonIcon icon={logoYoutube} className="socialIcon"></IonIcon>
          <IonIcon icon={logoInstagram} className="socialIcon"></IonIcon>
          <IonIcon icon={logoTiktok} className="socialIcon"></IonIcon>
          <IonIcon icon={logoWhatsapp} className="socialIcon"></IonIcon>
        </IonRow>
      </IonToolbar>

      <IonToolbar color="red">
        <IonTitle size="large" slot="start" id="headertitle">
          <b>EXIT </b>
        </IonTitle>

        {mQuery && !mQuery.matches ? (
          <IonButtons slot="end">
            <IonMenuButton />
          </IonButtons>
        ) : (
          <>
            <IonButtons slot="start">
              <IonButton routerLink={"/home"}>
                <b>Home </b>
              </IonButton>
              <IonButton routerLink={"/stages"}>
                <b>Stages </b>
              </IonButton>
              <IonButton routerLink={"/tickets"} slot="end">
                <b>Tickets</b>
              </IonButton>
              <IonButton routerLink={"/registration"} slot="end">
                <b>Registration</b>
              </IonButton>
              <IonButton routerLink={"/contact"} slot="end">
                <b>Contact</b>
              </IonButton>
            </IonButtons>
          </>
        )}
      </IonToolbar>
    </div>
  );
};

export default NavBar;
