import {
  IonContent,
  IonGrid,
  IonHeader,
  IonImg,
  IonPage,
  IonRow,
  IonSlide,
  IonSlides,
  IonText,
  IonTitle,
} from "@ionic/react";
import React from "react";
import NavBar from "../components/navigation/NavBar";

const Home: React.FC = () => {
  const slideOpts = {
    initialSlide: 1,
    speed: 1200,
    loop: true,
    autoplay: {
      delay: 400,
    },
  };

  return (
    <IonPage>
      <IonHeader>
        <NavBar />
      </IonHeader>
      <IonContent fullscreen>
        <IonSlides pager={true} options={slideOpts}>
          <IonSlide>
            <IonImg src={"/images/homePage/hp1.jpg"} alt="slide-1" />
          </IonSlide>
          <IonSlide>
            <IonImg src={"/images/homePage/hp2.jpg"} alt="slide-2" />
          </IonSlide>
          <IonSlide>
            <IonImg src={"/images/homePage/hp3.jpg"} alt="slide-3" />
          </IonSlide>
          <IonSlide>
            <IonImg src={"/images/homePage/hp4.jpg"} alt="slide-4" />
          </IonSlide>
          <IonSlide>
            <IonImg src={"/images/homePage/hp5.jpg"} alt="slide-5" />
          </IonSlide>
          <IonSlide>
            <IonImg src={"/images/homePage/hp6.jpg"} alt="slide-6" />
          </IonSlide>
          <IonSlide>
            <IonImg src={"/images/homePage/hp7.jpg"} alt="slide-7" />
          </IonSlide>
          <IonSlide>
            <IonImg src={"/images/homePage/hp8.jpg"} alt="slide-8" />
          </IonSlide>
        </IonSlides>
        <IonTitle color="grey" className="HomePageTitle">
          Exit App
        </IonTitle>
        <IonGrid className="HomePageText">
          <IonRow>
            <IonText>Exit App have...</IonText>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Home;
