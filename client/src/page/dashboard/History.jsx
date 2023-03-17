import { useState, useEffect } from "react";
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'


import Wrapper from "../../assets/wrappers/History";

const History = () => {
  return (
    <Wrapper>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={[]}
        contentHeight="650px"
      />
    </Wrapper>
  )
};
export default History;
