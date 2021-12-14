import React from "react";
import { Flex, Grid, retriever } from "@retriever-ui/react";

import dateUtils from "../../utils/date";
import { v4 } from "uuid";

interface CalendarProps {
  initialDate?: Date;
}
interface DayProps {
  date: Date;
}

const Day = ({ date }: DayProps) => {
  const [bg, setBg] = React.useState<string>("#fff");

  return (
    <retriever.div
      minW="100%"
      h={[32, 40]}
      maxW={[32, 40]}
      maxH={[32, 40]}
      radius={20}
      d="flex"
      bg={bg}
      alignItems="center"
      justifyContent="center"
      onClick={() => setBg("#f22")}
      data-testid={"day-test-" + dateUtils.format(date, "dd-MM-yyyy") + "-id"}
    >
      {dateUtils.format(date, "dd")}
    </retriever.div>
  );
};

const Calendar = ({ initialDate = new Date() }: CalendarProps) => {
  const [showMonths, setShowMonths] = React.useState<boolean>(false);

  const [date, setDate] = React.useState<Date>(initialDate);

  const next = (date: Date) => {
    if (showMonths) return setDate(dateUtils.sum(date, { years: 1 }));

    setDate(dateUtils.sum(date, { months: 1 }));
  };

  const prev = (date: Date) => {
    if (showMonths) return setDate(dateUtils.sub(date, { years: 1 }));

    setDate(dateUtils.sub(date, { months: 1 }));
  };

  const jump = (goTo: Date) => {
    setDate(goTo);
    return setShowMonths(false);
  };

  const openMonths = () => setShowMonths(true);

  const months = dateUtils.eachMonthsOfYear(date);
  const dates = dateUtils.eachDaysOfMonth(date);

  return (
    <Flex
      p={[16, 24]}
      radius={16}
      shadow="1px 1px 15px -5px black.300"
      direction="column"
      alignItems="center"
      maxW={400}
    >
      <Flex alignItems="center" justifyContent="space-between" gap={12}>
        <retriever.button
          h={32}
          pX={16}
          radius={8}
          fontWeight={700}
          border="2px solid black.300"
          data-testid="prev-test-id"
          onClick={() => prev(date)}
        >
          {"<"}
        </retriever.button>
        {showMonths ? (
          <retriever.div>{dateUtils.format(date, "yyyy")}</retriever.div>
        ) : (
          <retriever.div data-testid="month-test-id" onClick={openMonths}>
            {dateUtils.format(date, "MMMM - yyyy")}
          </retriever.div>
        )}

        <retriever.button
          h={32}
          pX={16}
          radius={8}
          fontWeight={700}
          border="2px solid black.300"
          data-testid="next-test-id"
          onClick={() => next(date)}
        >
          {">"}
        </retriever.button>
      </Flex>
      {!showMonths && (
        <Grid
          mTop={20}
          justifyItems="center"
          gridTemplateColumns="repeat(7, 1fr)"
          gap={8}
        >
          <retriever.p fontSize={14}>Dom</retriever.p>
          <retriever.p fontSize={14}>Seg</retriever.p>
          <retriever.p fontSize={14}>Ter</retriever.p>
          <retriever.p fontSize={14}>Qua</retriever.p>
          <retriever.p fontSize={14}>Qui</retriever.p>
          <retriever.p fontSize={14}>Sex</retriever.p>
          <retriever.p fontSize={14}>Sab</retriever.p>
        </Grid>
      )}
      {showMonths ? (
        <Grid
          mTop={16}
          justifyItems="center"
          gridTemplateColumns="repeat(3, 1fr)"
          gap={8}
        >
          {months.map((month) => (
            <retriever.div
              key={v4()}
              h={40}
              w="100%"
              radius={20}
              d="flex"
              alignItems="center"
              justifyContent="center"
              onClick={() => jump(month)}
              data-testid={
                "month-test-" + dateUtils.format(month, "MMMM") + "-id"
              }
            >
              {dateUtils.format(month, "MMMM")}
            </retriever.div>
          ))}
        </Grid>
      ) : (
        <Grid
          gap={8}
          mTop={16}
          justifyItems="center"
          gridTemplateColumns="repeat(7, 1fr)"
        >
          {dates.map((date) => (
            <Day key={v4()} date={date} />
          ))}
        </Grid>
      )}
    </Flex>
  );
};

export default Calendar;
