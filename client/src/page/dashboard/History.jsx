import { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

import Wrapper from '../../assets/wrappers/History';
import { fetchTodoForCalendar } from '../../utils/api/todo';

const History = () => {
  const [date, setDate] = useState(null);
  const [todoList, setTodoList] = useState([]);

  const handleDateChange = async (e) => {
    const { startStr } = e;
    const [year, month] = startStr.split('-');
    const { notStartedTodo } = await fetchTodoForCalendar({ year, month });
    setTodoList(notStartedTodo);
  };

  return (
    <Wrapper>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={todoList}
        contentHeight="650px"
        datesSet={handleDateChange}
        fixedWeekCount={false}
        showNonCurrentDates={false}
      />
    </Wrapper>
  );
};
export default History;
