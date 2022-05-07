import React from "react";
import AddEventCard from "../../components/event/admin/AddEventCard";
import {EventsProvider} from "../../store/EventsContext";
import {StagesProvider} from "../../store/StagesContext";
import {PerformersProvider} from "../../store/PerformersContext";
import StandardPageWrapper from "../StandardPageWrapper";

const AddEventPage : React.FC= () => {
  return (
      <EventsProvider>
        <StagesProvider>
          <PerformersProvider>
              <StandardPageWrapper>
                  <AddEventCard/>
              </StandardPageWrapper>
          </PerformersProvider>
        </StagesProvider>
      </EventsProvider>
  );
}

export default AddEventPage;