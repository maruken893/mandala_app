import { FaUserAlt } from 'react-icons/fa';
import { MdTableChart } from 'react-icons/md';
import { RiTodoLine } from 'react-icons/ri';
import { GoCalendar } from 'react-icons/go';

const links = [
  {
    id: 1,
    text: 'Chart',
    to: '/',
    icon: <MdTableChart />,
  },
  {
    id: 2,
    text: 'Todo',
    to: 'todo',
    icon: <RiTodoLine />,
  },
  {
    id: 3,
    text: 'History',
    to: 'history',
    icon: <GoCalendar />,
  },
  {
    id: 4,
    text: 'Profile',
    to: 'profile',
    icon: <FaUserAlt />,
  },
];

export default links;
