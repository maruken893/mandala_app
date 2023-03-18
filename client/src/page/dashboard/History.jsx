import { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

import Wrapper from '../../assets/wrappers/History';
import { fetchTodoForCalendar } from '../../utils/api/todo';

const History = () => {
  const [dateInfo, setDateInfo] = useState({ year: '', month: '' });
  const [fetchTypes, setFetchTypes] = useState({
    notStarted: true,
    done: true,
  });
  const [todoList, setTodoList] = useState([]);

  const fetchTodoList = async ({ year, month, fetchTypes }) => {
    const { notStartedTodoList, doneTodoList } = await fetchTodoForCalendar({
      year,
      month,
      fetchTypes,
    });
    const notStartedTodoListWithColor = notStartedTodoList?.map((todo) => ({
      ...todo,
      color: '#ff1f1f',
    }));
    const doneTodoListWithColor = doneTodoList?.map((todo) => ({
      ...todo,
      color: '#025bff',
    }));
    setTodoList([...notStartedTodoListWithColor, ...doneTodoListWithColor]);
  };

  console.log(todoList);

  const handleDateSet = (e) => {
    const { startStr } = e;
    const [year, month] = startStr.split('-');
    setDateInfo({ year, month });
    fetchTodoList({ year, month, fetchTypes });
  };

  const handleAll = async () => {
    const NEW_FETCH_TYPES = { notStarted: true, done: true };
    setFetchTypes(NEW_FETCH_TYPES);
    await fetchTodoList({ ...dateInfo, fetchTypes: NEW_FETCH_TYPES });
  };

  const handleNotStarted = async () => {
    const NEW_FETCH_TYPES = { notStarted: true, done: false };
    setFetchTypes(NEW_FETCH_TYPES);
    await fetchTodoList({ ...dateInfo, fetchTypes: NEW_FETCH_TYPES });
  };

  const handleDone = async () => {
    const NEW_FETCH_TYPES = { notStarted: false, done: true };
    setFetchTypes(NEW_FETCH_TYPES);
    await fetchTodoList({ ...dateInfo, fetchTypes: NEW_FETCH_TYPES });
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
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        events={todoList}
        firstDay={1}
        height={700}
        datesSet={handleDateSet}
        eventOrder={'StatusId'}
        dayMaxEvents={3}
        fixedWeekCount={false}
        showNonCurrentDates={false}
        customButtons={{
          all: {
            text: 'All',
            click: handleAll,
          },
          notStarted: {
            text: 'Not Started',
            click: handleNotStarted,
          },
          done: {
            text: 'Done',
            click: handleDone,
          },
        }}
        headerToolbar={{
          start: 'title', // will normally be on the left. if RTL, will be on the right
          center: 'all notStarted done',
          end: 'today prev,next', // will normally be on the right. if RTL, will be on the left
        }}
      />
    </Wrapper>
  );
};
export default History;
