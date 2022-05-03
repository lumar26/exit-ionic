import React from "react";
import {StagesProvider} from "../../store/StagesContext";
import StandardPageWrapper from "../StandardPageWrapper";
import StagesTable from "../../components/stage/admin/StagesTable";

const AdminStagesPage : React.FC = () => {
  return (
    <StagesProvider>
        <StandardPageWrapper>
            <StagesTable />
        </StandardPageWrapper>
    </StagesProvider>
  );
}
export default AdminStagesPage;