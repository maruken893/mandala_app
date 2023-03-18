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
    const notStartedTodoWithColor = notStartedTodo.map((todo) => ({
      ...todo,
      color: '#ff1f1f',
    }));
    setTodoList(notStartedTodoWithColor);
  };

  useEffect(function setCalendarEventHeightHack() {
    // a bit unsafe: I'm just grabbing the table via a class name
    const calendarElement = document.getElementsByClassName(
      'fc-scrollgrid-sync-table'
    )[0];

    if (calendarElement.tagName == 'TABLE') {
      const trElements = calendarElement.getElementsByTagName('tr');

      for (let i = 0; i < trElements.length; i++) {
        const tr = trElements[i];

        tr.style.height = `${100 / trElements.length}%`;
      }
    }
  });

  return (
    <Wrapper>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={todoList}
        firstDay={1}
        height={700}
        aspectRatio={1}
        datesSet={handleDateChange}
        dayMaxEvents={3}
        fixedWeekCount={false}
        showNonCurrentDates={false}
      />
    </Wrapper>
  );
};
export default History;
