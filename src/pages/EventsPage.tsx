import React from "react";
import {EventsProvider} from "../store/EventsContext";
import StandardPageWrapper from "./StandardPageWrapper";
import EventsPageContent from "../components/event/EventsPageContent";

const EventsPage: React.FC = () => {
  return (
      <EventsProvider>
          <StandardPageWrapper>
              <EventsPageContent />
          </StandardPageWrapper>
      </EventsProvider>

  );
};

export default EventsPage;
