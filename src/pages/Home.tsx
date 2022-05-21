import {
  IonButton,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonImg,
  IonModal,
  IonPage,
  IonRow,
  IonSlide,
  IonSlides,
  IonText,
  IonTitle,
  IonVirtualScroll,
} from "@ionic/react";
import React, { useState } from "react";
import NavBar from "../components/navigation/NavBar";
import Footer from "../components/navigation/Footer";
import CommentSection from "../components/event/CommentSection";
import {
  chatboxEllipsesOutline,
  gitCommitOutline,
  peopleOutline,
} from "ionicons/icons";

const Home: React.FC = () => {
  const slideOpts = {
    initialSlide: 1,
    speed: 1200,
    loop: true,
    autoplay: {
      delay: 400,
    },
  };

  const [showModalComments, setShowModalComments] = useState(false);

  return (
    <IonPage>
      <IonHeader>
        <NavBar />
      </IonHeader>

      <IonContent fullscreen className="homePage">
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
          <IonRow></IonRow>
        </IonGrid>

        {/**********************Dugme koje se dodaje na event card**********************************/}
        <IonRow className="commentsBox">
          <IonModal isOpen={showModalComments}>
            <CommentSection></CommentSection>

            <IonButton
              color="grey"
              className="buttonCloseModal"
              onClick={() => {
                setShowModalComments(false);
              }}
            >
              CLOSE
            </IonButton>
          </IonModal>
          {/*<IonButton
                        onClick={() => {
                            if (!event.performers || event.performers.length === 0) {
                                alert({
                                    cssClass: "styles",
                                    header: "Alert",
                                    message: "No performers added for this event",
                                    buttons: [
                                        "Ok",
                                    ],
                                });
                            } else setShowModalPerformers(true);
                        }}
                      
                    >*/}
          <IonButton
            onClick={() => {
              setShowModalComments(true);
            }}
            color="grey"
          >
            <IonIcon
              icon={chatboxEllipsesOutline}
              className="iconMenu"
            ></IonIcon>
            <IonText className="eventtabs"> Show comments</IonText>
          </IonButton>
        </IonRow>
        <Footer></Footer>
      </IonContent>
    </IonPage>
  );
};

export default Home;
