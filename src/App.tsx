import React from "react";
import { Flex, GlobalStyles, RetrieverProvider } from "@retriever-ui/react";
import Calendar from "./components/calendar";

const App = () => {
  return (
    <RetrieverProvider>
      <Flex pX={16} mTop={80} justifyContent="center">
        <Calendar />
      </Flex>
      <GlobalStyles />
    </RetrieverProvider>
  );
};

export default App;
