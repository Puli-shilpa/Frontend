import React from "react";
import { AppContainer, EmployeeAppContainer } from "@selco/digit-ui-react-component";

import Complaint from "./pages/employee/index";
const App = () => {
  return (
    <EmployeeAppContainer>
      <Complaint />
    </EmployeeAppContainer>
  );
};

export default App;
