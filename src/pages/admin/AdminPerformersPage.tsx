import React from "react";
import StandardPageWrapper from "../StandardPageWrapper";
import PerformersTable from "../../components/performer/admin/PerformersTable";
import {PerformersProvider} from "../../store/PerformersContext";

const AdminPerformersPage: React.FC = () => {
    return (
        <StandardPageWrapper>
            <PerformersProvider>
                <PerformersTable/>
            </PerformersProvider>
        </StandardPageWrapper>
    );
}
export default AdminPerformersPage;