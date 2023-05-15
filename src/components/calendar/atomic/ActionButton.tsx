import { Flex, retriever } from "@retriever-ui/react";

//Para os botões de "preview" e "next"
const ActionButton = () => {
  <Flex>
    <retriever.button
      h={32}
      pX={16}
      radius={8}
      fontWeight={700}
      border="2px solid black.300"
      /*Agora preciso entender como atualizar o teste e a ação onClick*/
      data-testid="prev-test-id"
      onClick={() => prev(date)}>

      {"<"}
    </retriever.button>
    ;
  </Flex>;
};

export default ActionButton;
